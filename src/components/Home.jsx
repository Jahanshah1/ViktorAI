const Home = () => {
    return(
        <div className="h-screen bg-[#171717] flex flex-col items-center justify-center">
            <div className="text-center text-white px-4 md:px-0">
                <h1 className="text-4xl sm:text-5xl md:text-6xl mb-4">AI powered virtual debate assistant</h1>
                <p className="text-lg sm:text-xl mb-8">
ViktorAI is an AI designed to challenge you in debates by presenting opposing viewpoints.</p>
                <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => window.location.href='/Application'}>
                    Go to app
                </button>

            <div className="mt-40">    
            <div className='text-2xl sm:text-3xl'>Subscribe for updates and share your suggestions with us ❤️</div>
                
            <form className="bg-[#171717] shadow-md rounded px-4 sm:px-8 pt-6 pb-8 mb-4" action="https://submit-form.com/o0atcyRg">
  <div className="flex flex-col sm:flex-row mb-3 justify-center">
    <div className="w-full sm:w-1/3 text-center flex flex-col items-center">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
        Name
      </label>
      <input className="w-full input" type="text" id="name" name="name" placeholder="Name" required="" />
    </div>
    <div className="w-full sm:w-1/3  text-center flex flex-col items-center">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email
      </label>
      <input className="w-full input" type="email" id="email" name="email" placeholder="Email" required="" />
    </div>
  </div>
  <div className="mb-6 flex flex-col items-center mt-5">
    <label className="block text-gray-700 text-sm font-bold mb-2" for="message">
      Message
    </label>
    <textarea className="w-full input"
      id="message"
      name="message"
      placeholder="Message"
      required=""
    ></textarea>
  </div>
  <div className="flex items-center justify-center">
    <button className="hbutton" type="submit">
      Send
    </button>
  </div>
</form>






            </div>


            </div>
            
        </div>

    )
}
export default Home;