export const currentYear = new Date().getFullYear();
export const currentMonth = new Date().getMonth() + 1;
export const currentDay = new Date().getDate();
export const currentDate = new Date();
export let pickedDate = (bYear, bMonth, bDay) => new Date(bYear, bMonth, bDay);
export let is14 = new Date(1970 + 14, 0, 1);
export let less70 = new Date(1970 + 70, 0, 1);

export const years = Array.from(
  new Array(108),
  (val, index) => currentYear - index
);

export const getDays = (bYear, bMonth) => {
  return new Date(bYear, bMonth, 0).getDate();
};

export const allDays = (bYear, bMonth) => {
  return Array.from(
    new Array(getDays(bYear, bMonth)),
    (val, index) => 1 + index
  );
};

export const months = Array.from(new Array(12), (val, index) => 1 + index);
