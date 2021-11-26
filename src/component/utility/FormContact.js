function FormContact() {

    return (
        <form class="w-full max-w-lg" name="contact" method="POST" netlify>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-name">
                        Name
                    </label>
                    <input class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-name" type="text" name="name" placeholder="John Doe">
                    </input>
                </div>
                <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                        Email
                    </label>
                    <input class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" name="email" placeholder="john.doe@email">
                    </input>

                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-message">
                        Message
                    </label>
                    <textarea class="appearance-none block w-full bg-gray-100 text-gray-700 h-20 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-message" name="message" placeholder="Message">
                    </textarea>
                </div>
            </div>
                <button type="submit" className="bg-secondAccent w-full py-2 text-l font-medium rounded text-white hover:bg-grayAccent transition-colors">Send</button>

        </form>

    )
}

export default FormContact;
