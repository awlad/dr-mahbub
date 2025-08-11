export default function Qualifications({ qualificationsString }) {
  const qualificationsArray = qualificationsString.split(',').map(q => q.trim());

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
