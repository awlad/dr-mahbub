'use client'

import { useRef, useState, useTransition } from 'react'
import NextImage from 'next/image'
import { uploadImageAction } from '@/app/admin/actions/media'

type MediaAssetLite = { id: string; path: string; filename: string }

type ImagePickerProps = {
  /** Name of the hidden form field submitted with the parent form (e.g. "imageId"). */
  name: string
  /** Currently selected image, if editing an existing item. */
  initialImage?: MediaAssetLite | null
  /** Existing media library assets to choose from (fetched server-side by the page). */
  mediaAssets: MediaAssetLite[]
  /** Subfolder under public/static/uploads to store new uploads in. */
  subfolder?: string
  label?: string
}

export default function ImagePicker({
  name,
  initialImage = null,
  mediaAssets,
  subfolder = 'general',
  label = 'Image',
}: ImagePickerProps) {
  const [selected, setSelected] = useState<MediaAssetLite | null>(initialImage)
  const [library, setLibrary] = useState<MediaAssetLite[]>(mediaAssets)
  const [isOpen, setIsOpen] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleUpload = (file: File) => {
    setError(null)
    const formData = new FormData()
    formData.append('file', file)
    formData.append('subfolder', subfolder)

    startTransition(async () => {
      const result = await uploadImageAction(formData)
      if (!result.ok) {
        setError(result.error)
        return
      }
      const asset = { id: result.asset.id, path: result.asset.path, filename: result.asset.filename }
      setLibrary((prev) => [asset, ...prev])
      setSelected(asset)
      setIsOpen(false)
    })
  }

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>
      <input type="hidden" name={name} value={selected?.id ?? ''} />

      <div className="flex items-center gap-3">
        {selected ? (
          <div className="relative h-20 w-20 overflow-hidden rounded-md border border-gray-300 dark:border-gray-600">
            <NextImage src={selected.path} alt={selected.filename} fill className="object-cover" />
          </div>
        ) : (
          <div className="flex h-20 w-20 items-center justify-center rounded-md border border-dashed border-gray-300 text-xs text-gray-400 dark:border-gray-600">
            No image
          </div>
        )}

        <div className="flex flex-col gap-2">
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="rounded bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
          >
            {isOpen ? 'Close' : 'Choose image'}
          </button>
          {selected && (
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="text-xs text-red-600 hover:underline"
            >
              Remove image
            </button>
          )}
        </div>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      {isOpen && (
        <div className="rounded-md border border-gray-200 p-3 dark:border-gray-700">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Upload new or pick existing
            </span>
            <button
              type="button"
              disabled={isPending}
              onClick={() => fileInputRef.current?.click()}
              className="rounded bg-cyan-600 px-3 py-1 text-sm text-white hover:bg-cyan-700 disabled:opacity-50"
            >
              {isPending ? 'Uploading…' : 'Upload image'}
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/png,image/jpeg,image/webp,image/gif"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0]
                if (file) handleUpload(file)
                e.target.value = ''
              }}
            />
          </div>
          <div className="grid max-h-64 grid-cols-4 gap-2 overflow-y-auto sm:grid-cols-6">
            {library.map((asset) => (
              <button
                type="button"
                key={asset.id}
                onClick={() => {
                  setSelected(asset)
                  setIsOpen(false)
                }}
                className={`relative aspect-square overflow-hidden rounded-md border-2 ${
                  selected?.id === asset.id
                    ? 'border-cyan-600'
                    : 'border-transparent hover:border-gray-300'
                }`}
              >
                <NextImage src={asset.path} alt={asset.filename} fill className="object-cover" />
              </button>
            ))}
            {library.length === 0 && (
              <p className="col-span-full text-sm text-gray-400">No images uploaded yet.</p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

