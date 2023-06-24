import Form from "@/components/Form";
import InfoTemplate from "@/components/InfoTemplate";
import axios from "axios";

export default async function Page() {
  // const { data } = await axios.post(`${process.env.HOST}/api/send-mail`, {
  //   clientEmail: "badsaofficial@gmail.com",
  // });
  //console.log(data);
  return (
    <div className="main-container">
      <div className="card">
        <div className="info-container">
          <InfoTemplate />
        </div>
        <div className="form-container">
          <Form />
        </div>
      </div>
    </div>
  );
}
