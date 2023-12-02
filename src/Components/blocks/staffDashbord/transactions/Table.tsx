

const Table = () => {


        const tableItems = [
            {
                avatar: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
                name: "Liam James",
                transactionType: "Credit",
                phone_nimber: "+1 (555) 000-000",
                position: "Software engineer",
                salary: "$100K"
            },
            {
                avatar: "https://randomuser.me/api/portraits/men/86.jpg",
                name: "Olivia Emma",
                transactionType: "debit",
                phone_nimber: "+1 (555) 000-000",
                position: "Product designer",
                salary: "$90K"
            },
            {
                avatar: "https://randomuser.me/api/portraits/women/79.jpg",
                name: "William Benjamin",
                transactionType: "credit",
                phone_nimber: "+1 (555) 000-000",
                position: "Front-end developer",
                salary: "$80K"
            },
            {
                avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
                name: "Henry Theodore",
                transactionType: "credit",
                phone_nimber: "+1 (555) 000-000",
                position: "Laravel engineer",
                salary: "$120K"
            },
            {
                avatar: "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
                name: "Amelia Elijah",
                transactionType: "debit",
                phone_nimber: "+1 (555) 000-000",
                position: "Open source manager",
                salary: "$75K"
            },
        ]
    
        return (
            <div className="mt-3 px-4 md:px-8">
                <div className="max-w-lg">
                    <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                        History
                    </h3>
                    <p className="text-gray-600 mt-2">
                        Browse through all of your past transactions
                    </p>
                </div>
                <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                    <table className="w-full table-auto text-sm text-left">
                        <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                            <tr>
                                <th className="py-3 px-6">Username/Transaction</th>
                                <th className="py-3 px-6">Phone number</th>
                                <th className="py-3 px-6">Position</th>
                                <th className="py-3 px-6">Salary</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 divide-y">
                            {
                                tableItems.map((item, idx) => (
                                    <tr key={idx}>
                                        <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                                            <img src={item.avatar} className="w-10 h-10 rounded-full" />
                                            <div>
                                                <span className="block text-gray-700 text-sm font-medium">{item.name}</span>
                                                <span className="block text-green-700 text-xs">{item.transactionType}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">{item.phone_nimber}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{item.position}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{item.salary}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

export default Table