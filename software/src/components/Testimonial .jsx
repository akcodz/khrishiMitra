const Testimonial = () => {
    const testimonialData = [
        {
            image:
                "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=200", // farmer portrait
            name: "Ramesh Kumar",
            title: "Farmer, Himachal Pradesh",
            content:
                "The smart irrigation system has saved me both water and effort. Earlier I used to over-irrigate, but now the soil sensors guide me perfectly.",
            rating: 5,
        },
        {
            image:
                "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=200", // woman farmer
            name: "Anita Devi",
            title: "Organic Farmer, Uttarakhand",
            content:
                "Rainfall predictions from the platform helped me plan sowing more effectively. My crop yield improved significantly this season.",
            rating: 5,
        },
        {
            image:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200", // young professional
            name: "Dr. Arjun Singh",
            title: "Agriculture Officer",
            content:
                "With live dashboards, we can guide farmers better in hilly regions. The system ensures sustainable farming with reduced water wastage.",
            rating: 4,
        },
    ]

    return (
        <div className=" px-4 sm:px-20 xl:px-32 py-24">
            <div className="text-center ">
                <h2 className="text-green-700 text-5xl font-semibold">
                    Trusted by Farmers & Experts
                </h2>
                <p className="text-gray-600 max-w-lg mx-auto mt-2 ">
                    Here’s what people using our Smart Farming solution are saying.
                </p>
            </div>
            <div className="flex flex-wrap mt-10 justify-center">
                {testimonialData.map((testimonial, index) => (
                    <div
                        key={index}
                        className="p-8 m-4 bg-white max-w-xs rounded-lg  shadow-md border border-green-200 hover:-translate-y-1 transition duration-300 cursor-pointer"
                    >
                        {/* Rating stars */}
                        <div className="flex items-center gap-1 text-green-500 ">
                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                                <svg
                                    key={i}
                                    width="16"
                                    height="15"
                                    viewBox="0 0 16 15"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z" />
                                </svg>
                            ))}
                        </div>
                        <p className="text-gray-600 text-sm my-5">
                            "{testimonial.content}"
                        </p>
                        <hr className="mb-5 border-gray-200" />
                        <div className="flex items-center gap-4">
                            <img
                                src={testimonial.image}
                                className="w-12 h-12 object-cover rounded-full"
                                alt={testimonial.name}
                            />
                            <div className="text-sm text-gray-700">
                                <h3 className="font-medium">{testimonial.name}</h3>
                                <p className="text-xs text-gray-500">{testimonial.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonial
