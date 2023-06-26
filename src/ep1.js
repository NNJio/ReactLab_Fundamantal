let getDataCustomer = (customerName = "Null", customerAddress = "Null") => {
  const address = `Customer Name: ${customerName}
    Address: ${customerAddress}`;
  return address;
};

console.log(getDataCustomer("Bankok"));
console.log(getDataCustomer("Naneee"));
