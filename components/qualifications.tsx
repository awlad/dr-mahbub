export default function Qualifications({ qualificationsString, qualifications }) {
  let qualificationsArray = []

  if (typeof qualificationsString === 'string') {
    qualificationsArray = qualificationsString.split(',').map((q) => q.trim())
  } else if (Array.isArray(qualifications)) {
    qualificationsArray = qualifications.map((q) => q.title)
  }

  if (qualificationsArray.length === 0) {
    return null
  }

  return (
    <div className="my-4">
      <h2 className="mb-2 text-xl font-semibold">Qualifications</h2>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
        {qualificationsArray.map((qualification, index) => (
          <li key={index}>{qualification}</li>
        ))}
      </ul>
    </div>
  )
}