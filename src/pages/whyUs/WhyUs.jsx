import { images } from "../../constants";
import { useEffect } from "react";
import AOS from "aos";

export const WhyUs = () => {
  useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);
  
  const reasons = [
    {
      id: "1",
      image: images.inventory,
      title: "Inventory Management",
      description:
        "Say goodbye to manual tracking and wasted food. KikapuApp gives you real-time data to optimize ordering and minimize waste.",
    },
    {
      id: "2",
      image: images.POS,
      title: "Seamless Point-of-Sale",
      description:
        "Process transactions, manage orders, and accept all payments; all in one user-friendly system and application.",
    },
    {
      id: "3",
      image: images.analytics,
      title: "Business Analytics",
      description:
        "Make data-driven decisions with comprehensive reports that unlock valuable customer and business performance insights.",
    },
    {
      id: "4",
      image: images.credit,
      title: "Financial Potential",
      description:
        "Our unique credit score solutions can open doors to financing opportunities, empowering your restaurant's growth.",
    },
    {
      id: "5",
      image: images.orderReservation,
      title: "Orders & Reservations",
      description:
        "KikapuApp offers online ordering and reservation booking, increasing customer satisfaction and loyalty.",
    },
    {
      id: "6",
      image: images.paymentOptions,
      title: "Diverse Payment Options",
      description:
        "Give your customers the flexibility to pay the way they want with our integrated payment processing system.",
    },
  ];

  const customers = [
    {
      id: "1",
      title: "Effortless Reservations",
      description: "Secure your table at your favorite restaurants with just a few taps on your device. No more waiting on hold—simply choose your desired time and party size, and we'll handle the rest."
    },
    {
      id: "2",
      title: "Digital Interactive E-menus",
      description: "Browse through detailed and interactive digital menus before you even set foot in the restaurant. Customize your order to your liking and place it directly from your device for a seamless dining experience."
    },
    {
      id: "3",
      title: "Table Service Made Easy",
      description: "Enjoy a smooth dining experience with seamless table service and efficient order processing. Your orders are sent directly to the kitchen, ensuring that your meal arrives without delays."
    },
    {
      id: "4",
      title: "Secure and Seamless Payments",
      description: "Pay for your meals with confidence, knowing that your payment information is protected. Choose from a variety of secure payment methods, including credit cards, digital wallets, and more."
    }
  ];
  
  const restaurants = [
    {
      id: "1",
      title: "Boost Revenue",
      description: "Increase your restaurant's sales and profitability with KIKAPU's powerful marketing tools. Attract more customers and keep them coming back with targeted promotions and featured listings."
    },
    {
      id: "2",
      title: "Increased Visibility",
      description: "Expand your reach and attract new customers by showcasing your restaurant on KIKAPU's platform. Gain access to a wider audience, including diners who might not have discovered you otherwise."
    },
    {
      id: "3",
      title: "Data-Driven Insights",
      description: "Harness the power of data to gain valuable insights into your customers' preferences and behavior. Use these insights to refine your menu, optimize pricing, and enhance the overall dining experience."
    },
    {
      id: "4",
      title: "Loyalty Program Integration",
      description: "Encourage repeat visits and build a loyal customer base by integrating a customizable loyalty program into your offerings. Reward  customers with discounts and exclusive perks that keep them coming back."
    }
  ];


  return (
    <div className="whyContainer" id="about">
      <div className='whyUsHeading'>
				<span style={{ color: "#E8F0F0" }}>Why</span> KikapuApp?
			</div>

      <div className="reasons_container">
        <div className="customerCont f_box">
          <div className="featureHead">
            <span>Customers</span>
            <img src={images.customers} alt="customers" className="cusImg" />
          </div>

          <div className="whySpecs">
            <div className="getTheApp" data-aos='fade-up'>
              <div className="getAppPic">
                <img src={images.customersTable} alt="customersTable" />
              </div>

              <div className="getAppDesc">
                <h1>Are you a customer?</h1>
                <p>Secure your table at your favorite restaurants with just a few taps on your device.</p>

                <a href='https://play.google.com/store/apps/details?id=com.eldagenius.kikapustudents&hl=en_US' className="getBtn" target="_blank">
								  <span>Download</span>
                  <span>
                    <img src={images.download} alt="download" />
                  </span>
                </a>
              </div>
            </div>

            <div className="f_grid">
              <div className="f_grid_title">
                Benefits
              </div>

              {customers.map ((item, id) => (
                <div className="cusItem featureItem" key={id}>
                  <div className="cusTitle f_title">{item.title}</div>
                  <div className="f_desc">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="resCont f_box">
          <div className="featureHead">
            <span>Restaurants</span>
            <img src={images.restHead} alt="restaurant" />
          </div>

          <div className="whySpecs">
            <div className="f_grid">
              <div className="f_grid_title">
                Benefits
              </div>
              {restaurants.map ((item, id) => (
                <div className="resItem featureItem" key={id}>
                  <div className="resTitle f_title">{item.title}</div>
                  <div className="f_desc">{item.description}</div>
                </div>
              ))}
            </div>

            <div className="getTheApp" data-aos='fade-up'>
              <div className="getAppPic">
                <img src={images.restaurantStaff} alt="customersTable" />
              </div>

              <div className="getAppDesc">
                <h1>Are you a restaurant?</h1>
                <p>Simplify your restaurant's daily operations with our intuitive platform.</p>

                <a href='https://play.google.com/store/apps/details?id=com.eldagenius.kikapuvendors&hl=en_US' className="getBtn" target="_blank">
								  <span>Download</span>
                  <span>
                    <img src={images.download} alt="download" />
                  </span>
                </a>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </div>
  );
};