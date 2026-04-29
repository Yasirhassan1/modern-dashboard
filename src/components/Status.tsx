interface StatusProps {
    status: "Online" | "Offline" | "Busy",
    text: string
}
export function Status({ status, text }: StatusProps) {
    const statusStyles = {
        "Online": "from-[#32e301] to-green-400",
        "Offline": "from-gray-300 to-gray-500",
        "Busy": "from-red-400 to-red-500",
    }
    return (
        <div className={`py-1 px-2 bg-linear-to-r rounded-lg w-fit text-sm text-white ${statusStyles[status]}`}>{text}</div>
    )
}