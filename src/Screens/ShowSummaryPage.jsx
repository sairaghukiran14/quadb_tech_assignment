import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from "../Utilities/Form";

const sample =
  "https://images.unsplash.com/photo-1586810724476-c294fb7ac01b?q=80&w=2836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const ShowSummaryPage = () => {
  const { id } = useParams();
  const [indishow, setIndishow] = useState();
  const [data, setData] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    const data1 = JSON.parse(localStorage.getItem("data"));
    setData(data1);

    const cur = data1?.find((element) => element.show.id === Number(id));
    setIndishow(cur);
  }, []);

  return (
    <div
      className={`showsummary-section relative  ${
        isOpen && "backdrop-brightness-50 bg-black/30 "
      } `}
    >
      <div className={`content `}>
        <div className="obsolute logo font-bold text-white text-3xl text-center tracking-widest bg-black">
          SHOWGLANZA
        </div>
        <div className="content_section flex justify-around items-center mt-2">
          <div className="poster_section flex justify-center items-center w-[40%]">
            <img
              src={indishow?.show.image?.original || sample}
              alt=""
              className={`rounded   ${isOpen && " blur-sm"}`}
            />
          </div>
          <div className="show_details border rounded-lg flex flex-col gap-2 w-[40%] p-3">
            <div className="show_name font-semibold text-xl">
              {indishow?.show.name}
            </div>
            <div className="rating">
              ⭐️{indishow?.show.rating.average || 5}/10
            </div>
            <div className="summary text-justify">
              {indishow?.show.summary
                .replace("<p>", "")
                .replace("</p>", "")
                .replace("<b>", "")
                .replace("</b>", "")}
            </div>
            <div className="genres flex gap-2">
              {indishow?.show?.genres?.map((g) => (
                <div
                  className="genre bg-black text-white px-4 py-1 font-semibold rounded"
                  key={g}
                >
                  {g}
                </div>
              ))}
            </div>
            <button
              className="bg-green-600 text-white rounded p-3 w-40 font-semibold"
              type="button"
              onClick={() => setIsOpen(true)}
            >
              Book now
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <Form
          name={indishow?.show.name}
          image={indishow?.show.image?.original || sample}
          handleClose={handleClose}
        />
      )}
    </div>
  );
};

export default ShowSummaryPage;
