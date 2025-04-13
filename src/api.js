const bookedSlots = {};

export const fetchAPI = async (date) => {
  const formattedDate = new Date(date).toISOString().split("T")[0];

  const allSlots = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const booked = bookedSlots[formattedDate] || [];

  return allSlots.filter((slot) => !booked.includes(slot));
};

export const submitAPI = async ({ date, time }) => {
  const formattedDate = new Date(date).toISOString().split("T")[0];

  if (!bookedSlots[formattedDate]) {
    bookedSlots[formattedDate] = [];
  }

  bookedSlots[formattedDate].push(time);

  return true;
};