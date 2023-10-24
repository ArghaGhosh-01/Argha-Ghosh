import Card from "./skills_card"
function skills() {
    return (
        <div class="mx-10 mt-10 w-auto">
            <h2 class="text-2xl font-bold mb-4 flex justify-center text-white">SKILLS</h2>
            <span className="bg-green-400 rounded-full w-96 h-96 opacity-10 absolute -left-20 circle"></span>
            <span className="bg-green-400 rounded-full w-72 h-72 opacity-10 absolute -right-0 -top-28 circle"></span>
            <div class="flex flex-wrap items-center justify-center">
                <Card />
                <Card />
                <Card />
                <Card />
     
            </div>
        </div>

    )
}

export default skills