'use client'

import { useState, useTransition } from 'react'
import NextImage from 'next/image'
import { deleteMediaAction } from '@/app/admin/actions/media'

type MediaAssetLite = {
  id: string
  path: string
  filename: string
  width: number | null
  height: number | null
  sizeBytes: number | null
}

export default function MediaGrid({ assets }: { assets: MediaAssetLite[] }) {
  const [items, setItems] = useState(assets)
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  const handleDelete = (id: string) => {
    setError(null)
    startTransition(async () => {
      const result = await deleteMediaAction(id)
      if (!result.ok) {
        setError(result.error ?? 'Could not delete image.')
        return
      }
      setItems((prev) => prev.filter((item) => item.id !== id))
    })
  }

  return (
    <div>
      {error && <p className="mb-3 text-sm text-red-600">{error}</p>}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {items.map((asset) => (
          <div
            key={asset.id}
            className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="relative aspect-square">
              <NextImage src={asset.path} alt={asset.filename} fill className="object-cover" />
            </div>
            <div className="p-2 text-xs text-gray-500 dark:text-gray-400">
              <p className="truncate">{asset.filename}</p>
              {asset.width && asset.height && (
                <p>
                  {asset.width}×{asset.height}
                </p>
              )}
              <button
                type="button"
                disabled={isPending}
                onClick={() => handleDelete(asset.id)}
                className="mt-1 text-red-600 hover:underline disabled:opacity-50"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        {items.length === 0 && (
          <p className="col-span-full text-sm text-gray-400">
            No images uploaded yet. Upload one from any section with an image field.
          </p>
        )}
      </div>
    </div>
  )
}


