import { useEffect, useState } from "react";

function HomePage() {
  const [text, setText] = useState("");
  const originalText = "Hai Sobat UMKM!!";
  const typingSpeed = 100;

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setText(originalText.slice(0, currentIndex));
      currentIndex++;

      if (currentIndex > originalText.length) {
        clearInterval(intervalId);
      }
    }, typingSpeed);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container" id="home">
      <div className="row my-3 py-5">
        <div className="col-md-6 col-sm-6 order-sm-1 order-md-2 ">
          <img
            src="../src/assets/img/landing-page/left.svg"
            alt="image"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 col-sm-6 d-flex align-content-center flex-wrap order-sm-2 order-md-1">
          <div className="upper">
            <div className="titles">
              <p className="hai" id="animated-text"></p>
              <p className="subhai">
                {text}
                <br></br>
                Kelola Keuangan Anda dengan Mudah Temukan Solusi Terbaik di
                Sini!{" "}
              </p>
            </div>
            <a href="#" className="btn btn-primary my-3">
              See More!
            </a>
            <div className="cta-logo my-5">
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="51"
                  viewBox="0 0 50 51"
                  fill="none"
                >
                  <path
                    d="M16.2503 5.00415H33.7503C40.417 5.00415 45.8337 10.4208 45.8337 17.0875V34.5875C45.8337 37.7922 44.5606 40.8656 42.2945 43.1317C40.0285 45.3978 36.955 46.6708 33.7503 46.6708H16.2503C9.58366 46.6708 4.16699 41.2542 4.16699 34.5875V17.0875C4.16699 13.8828 5.44005 10.8093 7.70612 8.54328C9.97218 6.27721 13.0456 5.00415 16.2503 5.00415ZM15.8337 9.17082C13.8445 9.17082 11.9369 9.96099 10.5304 11.3675C9.12384 12.774 8.33366 14.6817 8.33366 16.6708V35.0042C8.33366 39.15 11.6878 42.5042 15.8337 42.5042H34.167C36.1561 42.5042 38.0638 41.714 39.4703 40.3075C40.8768 38.9009 41.667 36.9933 41.667 35.0042V16.6708C41.667 12.525 38.3128 9.17082 34.167 9.17082H15.8337ZM35.9378 12.2958C36.6285 12.2958 37.2909 12.5702 37.7793 13.0586C38.2676 13.5469 38.542 14.2093 38.542 14.9C38.542 15.5907 38.2676 16.253 37.7793 16.7414C37.2909 17.2298 36.6285 17.5042 35.9378 17.5042C35.2472 17.5042 34.5848 17.2298 34.0964 16.7414C33.608 16.253 33.3337 15.5907 33.3337 14.9C33.3337 14.2093 33.608 13.5469 34.0964 13.0586C34.5848 12.5702 35.2472 12.2958 35.9378 12.2958ZM25.0003 15.4208C27.763 15.4208 30.4125 16.5183 32.366 18.4718C34.3195 20.4253 35.417 23.0748 35.417 25.8375C35.417 28.6002 34.3195 31.2497 32.366 33.2032C30.4125 35.1567 27.763 36.2542 25.0003 36.2542C22.2377 36.2542 19.5881 35.1567 17.6346 33.2032C15.6811 31.2497 14.5837 28.6002 14.5837 25.8375C14.5837 23.0748 15.6811 20.4253 17.6346 18.4718C19.5881 16.5183 22.2377 15.4208 25.0003 15.4208ZM25.0003 19.5875C23.3427 19.5875 21.753 20.246 20.5809 21.4181C19.4088 22.5902 18.7503 24.1799 18.7503 25.8375C18.7503 27.4951 19.4088 29.0848 20.5809 30.2569C21.753 31.429 23.3427 32.0875 25.0003 32.0875C26.6579 32.0875 28.2476 31.429 29.4197 30.2569C30.5918 29.0848 31.2503 27.4951 31.2503 25.8375C31.2503 24.1799 30.5918 22.5902 29.4197 21.4181C28.2476 20.246 26.6579 19.5875 25.0003 19.5875Z"
                    fill="#146C94"
                  />
                </svg>
              </a>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="51"
                  viewBox="0 0 50 51"
                  fill="none"
                >
                  <path
                    d="M45.8337 25.8375C45.8337 14.3375 36.5003 5.00415 25.0003 5.00415C13.5003 5.00415 4.16699 14.3375 4.16699 25.8375C4.16699 35.9208 11.3337 44.3166 20.8337 46.2541V32.0875H16.667V25.8375H20.8337V20.6291C20.8337 16.6083 24.1045 13.3375 28.1253 13.3375H33.3337V19.5875H29.167C28.0212 19.5875 27.0837 20.525 27.0837 21.6708V25.8375H33.3337V32.0875H27.0837V46.5667C37.6045 45.525 45.8337 36.65 45.8337 25.8375Z"
                    fill="#146C94"
                  />
                </svg>
              </a>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="51"
                  viewBox="0 0 50 51"
                  fill="none"
                >
                  <path
                    d="M39.5833 7.0874C40.6884 7.0874 41.7482 7.52639 42.5296 8.30779C43.311 9.08919 43.75 10.149 43.75 11.2541V40.4207C43.75 41.5258 43.311 42.5856 42.5296 43.367C41.7482 44.1484 40.6884 44.5874 39.5833 44.5874H10.4167C9.3116 44.5874 8.25179 44.1484 7.47039 43.367C6.68899 42.5856 6.25 41.5258 6.25 40.4207V11.2541C6.25 10.149 6.68899 9.08919 7.47039 8.30779C8.25179 7.52639 9.3116 7.0874 10.4167 7.0874H39.5833ZM38.5417 39.3791V28.3374C38.5417 26.5361 37.8261 24.8087 36.5524 23.535C35.2787 22.2613 33.5513 21.5457 31.75 21.5457C29.9792 21.5457 27.9167 22.6291 26.9167 24.2541V21.9416H21.1042V39.3791H26.9167V29.1082C26.9167 27.5041 28.2083 26.1916 29.8125 26.1916C30.586 26.1916 31.3279 26.4989 31.8749 27.0458C32.4219 27.5928 32.7292 28.3347 32.7292 29.1082V39.3791H38.5417ZM14.3333 18.6707C15.2616 18.6707 16.1518 18.302 16.8082 17.6456C17.4646 16.9892 17.8333 16.099 17.8333 15.1707C17.8333 13.2332 16.2708 11.6499 14.3333 11.6499C13.3996 11.6499 12.504 12.0208 11.8437 12.6811C11.1834 13.3414 10.8125 14.237 10.8125 15.1707C10.8125 17.1082 12.3958 18.6707 14.3333 18.6707ZM17.2292 39.3791V21.9416H11.4583V39.3791H17.2292Z"
                    fill="#146C94"
                  />
                </svg>
              </a>
              <a href="https://github.com/helvizar/usahaoptima">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="51"
                  viewBox="0 0 50 51"
                  fill="none"
                >
                  <path
                    d="M25.0003 5.00415C22.2645 5.00415 19.5554 5.54302 17.0278 6.58999C14.5001 7.63697 12.2035 9.17154 10.2689 11.1061C6.36193 15.0131 4.16699 20.3121 4.16699 25.8375C4.16699 35.0458 10.1462 42.8583 18.417 45.6292C19.4587 45.7958 19.792 45.15 19.792 44.5875V41.0666C14.0212 42.3166 12.792 38.275 12.792 38.275C11.8337 35.8583 10.4795 35.2125 10.4795 35.2125C8.58366 33.9208 10.6253 33.9625 10.6253 33.9625C12.7087 34.1083 13.8128 36.1083 13.8128 36.1083C15.6253 39.275 18.6878 38.3375 19.8753 37.8375C20.0628 36.4833 20.6045 35.5666 21.1878 35.0458C16.5628 34.525 11.7087 32.7333 11.7087 24.7958C11.7087 22.4833 12.5003 20.6291 13.8545 19.15C13.6462 18.6291 12.917 16.4625 14.0628 13.65C14.0628 13.65 15.8128 13.0875 19.792 15.775C21.4378 15.3167 23.2295 15.0875 25.0003 15.0875C26.7712 15.0875 28.5628 15.3167 30.2087 15.775C34.1878 13.0875 35.9378 13.65 35.9378 13.65C37.0837 16.4625 36.3545 18.6291 36.1462 19.15C37.5003 20.6291 38.292 22.4833 38.292 24.7958C38.292 32.7541 33.417 34.5041 28.7712 35.025C29.5212 35.6708 30.2087 36.9417 30.2087 38.8792V44.5875C30.2087 45.15 30.542 45.8167 31.6045 45.6292C39.8753 42.8375 45.8337 35.0458 45.8337 25.8375C45.8337 23.1016 45.2948 20.3925 44.2478 17.8649C43.2008 15.3373 41.6663 13.0406 39.7317 11.1061C37.7972 9.17154 35.5005 7.63697 32.9729 6.58999C30.4453 5.54302 27.7362 5.00415 25.0003 5.00415Z"
                    fill="#146C94"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
