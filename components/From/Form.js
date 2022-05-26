import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import css from "./Form.module.scss";
import { getFromDate } from "../../store/action/FormFilter";
const initialValue = {
  employeeID: "",
  applicationID: "",
  actionType: "",
  applicationType: "",
  fromDate: "",
  toDate: "",
};
const Form = ({ actionType, applictionType }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => dispatch(getFromDate(data));
  const clearInput = () => {
    reset(initialValue);
  };
  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={css.inputbox}>
        <input type="text" className={css.input} {...register("employeeID")} />
        <span className={css.name}>Employee ID</span>
      </div>
      <div className={css.inputbox}>
        <input
          type="text"
          className={css.input}
          {...register("applicationID")}
        />
        <span className={css.name}>Application ID</span>
      </div>
      <div className={css.inputbox}>
        <select {...register("actionType")}>
          <option value=" "> ---- </option>

          {actionType?.map(
            (item, index) =>
              item !== null && (
                <option key={index} value={item}>
                  {item}
                </option>
              )
          )}
        </select>
        <span className={css.name}>Action type</span>
      </div>
      <div className={css.inputbox}>
        <select {...register("applicationType")}>
          <option value=" "> ---- </option>
          {applictionType?.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        <span className={css.name}>Application type</span>
      </div>
      <div className={css.inputbox}>
        <input
          className={css.inputDate}
          type="date"
          {...register("fromDate")}
        />
        <span className={css.name}>From Date</span>
      </div>
      <div className={css.inputbox}>
        <input className={css.inputDate} type="date" {...register("toDate")} />
        <span className={css.name}>To Date</span>
      </div>
      <button type="submit" className={css.btn}>
        Search Logger
      </button>
      <button onClick={clearInput} className={css.btn}>
        Clear Input
      </button>
    </form>
  );
};

export default Form;
