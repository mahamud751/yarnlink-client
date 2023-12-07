import UseFetch from "../../hooks/useFetch";
import Image from "next/image";
const Vision = () => {
  const { data: mission } = UseFetch("mission");
  const { data: vision } = UseFetch("vision");

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-sm-3 p-3 position-relative border d-flex align-items-center bg-white">
          <div className="w-100">
            <h4>VISION</h4>
            {vision?.map((item) => (
              <p key={item._id}>{item?.desc}</p>
            ))}
          </div>
        </div>
        <div className="col-sm-3 p-0 text-center">
          {vision?.map((item) => (
            <Image
              key={item._id}
              width={320}
              height={220}
              src={`${item.photos[0]}`}
              alt="vision"
              style={{
                height: "340px",
              }}
              className="img-fluid"
            />
          ))}
        </div>
        <div className="col-sm-3 p-3 position-relative border d-flex align-items-center bg-white">
          <div className="w-100">
            <h4>MISSION</h4>
            {mission?.map((item) => (
              <p key={item._id}>{item?.desc}</p>
            ))}
          </div>
        </div>
        <div className="col-sm-3 p-0 text-center">
          {mission?.map((item) => (
            <Image
              key={item._id}
              width={320}
              height={220}
              src={`${item.photos[0]}`}
              alt="vision"
              style={{
                height: "340px",
              }}
              className="img-fluid"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vision;
