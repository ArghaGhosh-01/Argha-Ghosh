import Card from "./skills_card"
function skills() {
    return (
        <div class="mx-10 mt-10 w-auto">
            <h2 class="text-2xl font-bold mb-4 flex justify-center text-white">SKILLS</h2>
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