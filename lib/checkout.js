import axios from "axios";

export async function checkout(budget) {
  // checkout now!
  const { data } = await axios.post(`/api/create-checkout-session`, {
    budget,
  });
  return data;
}
