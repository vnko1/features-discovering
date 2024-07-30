import PayForm from "./components";

const Pay = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PayForm
        orderReference="DH1722328058"
        orderDate={1415379863}
        amount={1547.36}
        currency="UAH"
        productName={[
          "Процессор",
          "Память Kingston DDR3-1600 4096MB PC3-12800",
        ]}
        productPrice={[3000, 547.36]}
        productCount={[1, 1]}
      />
    </main>
  );
};

export default Pay;
