const SearchArea = () => {
  const pharamcyAPI = axios.create({
    baseURL: `http://openapi.seoul.go.kr:8088/${process.env.NEXT_PUBLIC_ANIMAL_PHARAMCY}/json/LOCALDATA_020302_GA/1/100/01`,
  });

  const handle = async () => {
    const { data } = await pharamcyAPI.get('/');
    console.log(data);
    const result = data.LOCALDATA_020302_GA.row.filter(store => store.TRDSTATEGBN !== '03');
    // console.log(result);
  };
  useEffect(() => {
    handle();
  }, []);
  return <div></div>;
};

export default SearchArea;
