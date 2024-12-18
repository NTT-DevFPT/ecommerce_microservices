import { phone } from "@/app/data/product";

export default function PhonePage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Danh sách điện thoại</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {phone.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                        <img src={product.image} alt={product.name} className="mb-4 w-full h-64 object-cover rounded-lg"/>
                        <h2 className="font-bold text-lg mb-2">{product.name}</h2>
                        <p className="text-gray-500 mb-2">{product.price}</p>
                        <p className="text-red-500">{product.discount}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
