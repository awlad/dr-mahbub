'use server'

import { revalidatePath } from 'next/cache'
import { prisma } from '@/lib/prisma'

function revalidatePublicPages() {
  revalidatePath('/')
  revalidatePath('/about')
  revalidatePath('/chambers')
  revalidatePath('/appointment')
}

// ---------- Chambers ----------

export async function createChamber(formData: FormData) {
  const maxOrder = await prisma.chamber.aggregate({ _max: { order: true } })
  await prisma.chamber.create({
    data: {
      location: String(formData.get('location') || ''),
      name: String(formData.get('name') || ''),
      phone: String(formData.get('phone') || ''),
      address: String(formData.get('address') || ''),
      schedule: String(formData.get('schedule') || ''),
      mapsEmbedUrl: String(formData.get('mapsEmbedUrl') || ''),
      order: (maxOrder._max.order ?? 0) + 1,
    },
  })
  revalidatePublicPages()
}

export async function updateChamber(id: string, formData: FormData) {
  await prisma.chamber.update({
    where: { id },
    data: {
      location: String(formData.get('location') || ''),
      name: String(formData.get('name') || ''),
      phone: String(formData.get('phone') || ''),
      address: String(formData.get('address') || ''),
      schedule: String(formData.get('schedule') || ''),
      mapsEmbedUrl: String(formData.get('mapsEmbedUrl') || ''),
    },
  })
  revalidatePublicPages()
}

export async function deleteChamber(id: string) {
  await prisma.chamber.delete({ where: { id } })
  revalidatePublicPages()
}

export async function reorderChamber(id: string, direction: 'up' | 'down') {
  await swapOrder(prisma.chamber, id, direction)
  revalidatePublicPages()
}

// ---------- Services ----------

export async function createService(formData: FormData) {
  const maxOrder = await prisma.service.aggregate({ _max: { order: true } })
  await prisma.service.create({
    data: {
      name: String(formData.get('name') || ''),
      description: String(formData.get('description') || ''),
      order: (maxOrder._max.order ?? 0) + 1,
    },
  })
  revalidatePublicPages()
}

export async function updateService(id: string, formData: FormData) {
  await prisma.service.update({
    where: { id },
    data: {
      name: String(formData.get('name') || ''),
      description: String(formData.get('description') || ''),
    },
  })
  revalidatePublicPages()
}

export async function deleteService(id: string) {
  await prisma.service.delete({ where: { id } })
  revalidatePublicPages()
}

export async function reorderService(id: string, direction: 'up' | 'down') {
  await swapOrder(prisma.service, id, direction)
  revalidatePublicPages()
}

// ---------- Achievements ----------

export async function createAchievement(formData: FormData) {
  const maxOrder = await prisma.achievement.aggregate({ _max: { order: true } })
  const imageId = String(formData.get('imageId') || '') || null
  await prisma.achievement.create({
    data: {
      title: String(formData.get('title') || ''),
      year: String(formData.get('year') || ''),
      description: String(formData.get('description') || ''),
      imageId,
      order: (maxOrder._max.order ?? 0) + 1,
    },
  })
  revalidatePublicPages()
}

export async function updateAchievement(id: string, formData: FormData) {
  const imageId = String(formData.get('imageId') || '') || null
  await prisma.achievement.update({
    where: { id },
    data: {
      title: String(formData.get('title') || ''),
      year: String(formData.get('year') || ''),
      description: String(formData.get('description') || ''),
      imageId,
    },
  })
  revalidatePublicPages()
}

export async function deleteAchievement(id: string) {
  await prisma.achievement.delete({ where: { id } })
  revalidatePublicPages()
}

export async function reorderAchievement(id: string, direction: 'up' | 'down') {
  await swapOrder(prisma.achievement, id, direction)
  revalidatePublicPages()
}

// ---------- Qualifications ----------

export async function createQualification(formData: FormData) {
  const maxOrder = await prisma.qualification.aggregate({ _max: { order: true } })
  await prisma.qualification.create({
    data: {
      title: String(formData.get('title') || ''),
      description: String(formData.get('description') || ''),
      order: (maxOrder._max.order ?? 0) + 1,
    },
  })
  revalidatePublicPages()
}

export async function updateQualification(id: string, formData: FormData) {
  await prisma.qualification.update({
    where: { id },
    data: {
      title: String(formData.get('title') || ''),
      description: String(formData.get('description') || ''),
    },
  })
  revalidatePublicPages()
}

export async function deleteQualification(id: string) {
  await prisma.qualification.delete({ where: { id } })
  revalidatePublicPages()
}

export async function reorderQualification(id: string, direction: 'up' | 'down') {
  await swapOrder(prisma.qualification, id, direction)
  revalidatePublicPages()
}

// ---------- About content (singleton) ----------

export async function updateAboutContent(formData: FormData) {
  const imageId = String(formData.get('imageId') || '') || null
  await prisma.aboutContent.upsert({
    where: { id: 'about' },
    update: { content: String(formData.get('content') || ''), imageId },
    create: { id: 'about', content: String(formData.get('content') || ''), imageId },
  })
  revalidatePublicPages()
}

// ---------- Site settings (singleton) — hero image ----------

export async function updateSiteSettings(formData: FormData) {
  const heroImageId = String(formData.get('heroImageId') || '') || null
  await prisma.siteSettings.upsert({
    where: { id: 'site' },
    update: { heroImageId },
    create: { id: 'site', heroImageId },
  })
  revalidatePublicPages()
}

// ---------- Shared reorder helper ----------

type OrderableDelegate = {
  findUnique(args: any): Promise<{ id: string; order: number } | null>
  findFirst(args: any): Promise<{ id: string; order: number } | null>
  update(args: any): Promise<unknown>
}

async function swapOrder(delegate: OrderableDelegate, id: string, direction: 'up' | 'down') {
  const current = await delegate.findUnique({ where: { id } })
  if (!current) return

  const neighbor = await delegate.findFirst({
    where: { order: direction === 'up' ? { lt: current.order } : { gt: current.order } },
    orderBy: { order: direction === 'up' ? 'desc' : 'asc' },
  })
  if (!neighbor) return

  await delegate.update({ where: { id: current.id }, data: { order: neighbor.order } })
  await delegate.update({ where: { id: neighbor.id }, data: { order: current.order } })
}


