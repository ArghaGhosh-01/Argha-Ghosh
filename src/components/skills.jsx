import Card from "./skills_card"
function skills() {
    return (
        <div class="mx-auto mt-10 w-auto">
            <h2 class="text-2xl font-bold mb-4 flex justify-center">Technologies I know</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mx-20 my-8">
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