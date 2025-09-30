function Hero () {
    return(
        <>
           <section className="container mx-auto flex flex-col-reverse md:flex-row items-center px-6 py-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold text-orange-500 mb-4">
            HOSO RWANDA
          </h1>
          <p className="text-white mb-6">
            Our mission is to unite Head of Schools across Rwanda under one umbrella that promotes collaboration, accountability, innovation, and excellence in education management. Together, we work to nurture young leaders, build character, and ensure every child has access to quality education regardless of background.
          </p>
          <div className="space-x-4">
   <button className="px-6 py-2 rounded-full bg-white/20 text-white font-semibold backdrop-blur-md border border-white/30 shadow-md hover:bg-white/30">
  Contact us
</button>
            <button className="px-6 py-2 rounded-full bg-white/20 text-white font-semibold backdrop-blur-md border border-white/30 shadow-md hover:bg-white/30">
  Gallery
</button>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end mb-8 md:mb-0">
          <img src="chancen.jpg" alt="Students"  className="h-80 rounded-2xl"
          />
        </div>
      </section>
           </>

    )
}
export default Hero;