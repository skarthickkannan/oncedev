import Layout from '../components/layouts/Layout';

export default function Home() {
  return (
    <Layout>
      <section className="section__hero flex items-center flex-col justify-center my-32 space-y-5">
        <h1 className="text-3xl text-gray-500 font-bold">
          Once dev Design Agency
        </h1>
        <p className="text-gray-400">
          An agency that make your website beautifully
        </p>
        <button className="bg-purple-600 text-white inline-block p-3 rounded-lg font-semibold outline-none focus:outline-none">
          Know More
        </button>
      </section>
      <section className="section__second flex flex-col items-center space-y-4 ">
        <h3 className="text-3xl text-gray-500 font-bold">Who we are</h3>
        <div className="section__same md:grid grid-cols-2">
          <img
            src="http://theonceadev.tech/wp-content/uploads/2020/09/macbook2-3.png"
            alt="secondimg"
          />
          <div className="section__content ">
            <h2 className="text-center text-xlxl text-gray-500 font-bold mb-4">
              About
            </h2>
            <p className="text-gray-400 text-sm text-justify">
              We provide services from web design and development, hosting,
              mobile applications to graphic design, brand identity, digital &
              social media marketing, typeface design, & printing.
              <br />
              <br />
              Experience is evolving since 2018. Our core value is to bring your
              business the latest trends & designs.
              <br />
              <br />
              We follow our principles by putting our clients’ interests first
              and providing them with the most valuable ideas and guaranteeing
              the highest level of services. We are committed to Excellence.
            </p>
          </div>
        </div>
      </section>
      <section className="section__third mb-12">
        <h2 className="text-center text-xlxl text-gray-500 font-bold my-4">
          Our Services
        </h2>
        <div className="section__card flex flex-wrap items-center mx-auto justify-center space-y-4 md:space-x-4 ">
          <div className="card-1 bg-white shadow-2xl border-gray-200 p-4 rounded-lg w-80 ">
            <h2 className="font-semibold text-gray-500 my-2">Branding</h2>
            <p className="text-sm text-gray-400">
              There are endless benefits of building and maintaining a strong
              brand. Having a strong brand works to build customer recognition.
            </p>
          </div>
          <div className="card-2  bg-white shadow-2xl border-gray-200 p-4 rounded-lg w-80">
            <h2 className="font-semibold text-gray-500 my-2">Branding</h2>
            <p className="text-sm text-gray-400">
              There are endless benefits of building and maintaining a strong
              brand. Having a strong brand works to build customer recognition.
            </p>
          </div>
          <div className="card-3  bg-white shadow-2xl border-gray-200 p-4 rounded-lg w-80">
            <h2 className="font-semibold text-gray-500 my-2">Branding</h2>
            <p className="text-sm text-gray-400">
              There are endless benefits of building and maintaining a strong
              brand. Having a strong brand works to build customer recognition.
            </p>
          </div>
          <div className="card-4  bg-white shadow-2xl border-gray-200 p-4 rounded-lg w-80">
            <h2 className="font-semibold text-gray-500 my-2">Branding</h2>
            <p className="text-sm text-gray-400">
              There are endless benefits of building and maintaining a strong
              brand. Having a strong brand works to build customer recognition.
            </p>
          </div>
          <div className="card-5  bg-white shadow-2xl border-gray-200 p-4 rounded-lg w-80">
            <h2 className="font-semibold text-gray-500 my-2">Branding</h2>
            <p className="text-sm text-gray-400">
              There are endless benefits of building and maintaining a strong
              brand. Having a strong brand works to build customer recognition.
            </p>
          </div>
        </div>
      </section>
      <section className="section-four mb-4 ">
        <h2 className="font-semibold text-gray-500 my-2 text-center">
          Testimonials
        </h2>
        <div className="section__testimonials  flex flex-wrap items-center mx-auto justify-center space-y-4 md:space-x-4 ">
          <div className="card-5  bg-white shadow-2xl border-gray-200 p-4 rounded-lg w-80">
            <p className="text-sm text-gray-400">
              I don't know what else to say. It really saves me time and effort.
              Application is exactly what our business has been lacking!
            </p>
          </div>
          <div className="flex space-x-8 mr-auto ml-7">
            <img
              className="rounded-full"
              src="https://source.unsplash.com/random/100x100"
              alt="profile"
            />
            <div className="section__person my-auto">
              <h3 className="text-lg font-semibold text-gray-400">Gowtham</h3>
              <p className="text-xs text-gray-500">Veza service</p>
            </div>
          </div>
          <div className="card-5  bg-white shadow-2xl border-gray-200 p-4 rounded-lg w-80">
            <p className="text-sm text-gray-400">
              I don't know what else to say. It really saves me time and effort.
              Application is exactly what our business has been lacking!
            </p>
          </div>
        </div>
      </section>
      <div className="footer w-full flex items-center justify-center flex-col mt-12 space-y-5 ">
        <form className="mt-3">
          <input
            type="text"
            className="px-2 py-1 border border-gray-300 rounded-md"
            placeholder="kkedits77@gmail.com"
          />
          <button className="bg-purple-600 text-white inline-block p-2 rounded-lg font-semibold outline-none focus:outline-none ml-3">
            Send
          </button>
        </form>
        <small className="text-sm text-gray-500 pb-4">
          &copy;Copyright2021
        </small>
      </div>
    </Layout>
  );
}
