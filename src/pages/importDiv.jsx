import Divs from "../components/divisions";
const ImpoDiv = () => {
  const word = [
    {
      title: "PCMAG.COM",
      content:
        "Hostinger provided itself a reliable web hosting servuce. In fact,our test site didn't godown during the 14-day observation period",
    },
    {
      title: "CNET.COM",
      content:
        "Plans including SSL certificates and all servers have an advaced securitymodule to protect your Data.",
    },
    {
      title: "SFGATE",
      content:
        "With DDOSprotection, auto-updates, automatic website backups, and other security measures, you can rest assured that your website is secured",
    },
  ];

  return (
    <>
      <div className="md:flex justify-center">
        {word.map((tit, index) => {
          return (
            <Divs
              className="w-fit"
              key={index}
              title={tit.title}
              content={tit.content}
            />
          );
        })}
      </div>
    </>
  );
};

export default ImpoDiv;
