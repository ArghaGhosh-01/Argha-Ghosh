import Card from "./skills_card"
function skills() {
    return (
        <div class="mx-10 mt-10 w-auto">
            <h2 class="text-2xl font-bold mb-4 flex justify-center">Skills</h2>
            <div class="max-w-screen-xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>

    )
}

export default skills