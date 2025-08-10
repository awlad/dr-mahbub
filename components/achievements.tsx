export default function Achievements({ achievements }) {
    return (
    <section className="my-8">
        <h2 className="text-2xl font-semibold mb-6">Achievements & Prizes</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {achievements.map(({ title, year, description, image }, i) => (
                <div
                    key={i}
                    className="rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-4 shadow hover:shadow-lg transition"
                >
                    {image && (
                        <img
                            src={image}
                            alt={title}
                            className="mb-3 h-40 w-full object-cover rounded-md"
                            loading="lazy"
                        />
                    )}
                    <h3 className="font-semibold text-lg mb-1">{title}</h3>
                    <p className="text-sm italic text-gray-600 dark:text-gray-400 mb-2">{year}</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{description}</p>
                </div>
            ))}
        </div>
    </section>
)
}
