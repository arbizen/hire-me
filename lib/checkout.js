import axios from "axios";

export async function checkout(formData) {
  // checkout now!
  const { data } = await axios.post(`/api/create-checkout-session`, {
    budget: formData?.budget,
    email: formData?.email,
    description: formData?.description,
  });
  console.log(data);
  return data;
}
