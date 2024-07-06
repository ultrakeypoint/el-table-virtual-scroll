const hundred = 100000;
export default Array(hundred).fill().map((_, i) => ({
  id: i+1,
  date: "2016-05-03",
  name: "Tom",
  address: "No. 189, Grove St, Los Angeles"
}));