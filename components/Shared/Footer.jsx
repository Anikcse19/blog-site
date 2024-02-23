import Center from "./Center";

const Footer = () => {
  return (
    <div className="bg-white mt-3">
      <Center>
        <div className="flex flex-col md:flex-row gap-8 p-2 items-center ">
          <div className="w-[100%] text-center">
            <span className="text-[12px]">
              As a website owner, you want to provide the best user experience
              for your visitors. However, with the rise of spam, it can be
              challenging to protect{" "}
            </span>
          </div>
          <div className="w-[100%] text-[12px] md:text-base flex items-center md:justify-between gap-3 justify-center font-normal md:font-semibold">
            <span>About Us</span>
            <span>Disclaimer</span>
            <span>Privacy Policy</span>
            <span>Terms and Condition</span>
          </div>
        </div>
      </Center>
    </div>
  );
};

export default Footer;
