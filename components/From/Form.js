import React from "react";
import { useForm } from "react-hook-form";
import classnames from "classnames";
import moment from "moment";

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
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    const fromDate = moment(data.fromDate);
    const toDate = moment(data.toDate);
    if (fromDate.isSameOrAfter(toDate, "day")) {
      setError(
        "toDate",
        {
          type: "custom",
          message:
            "the inputs has 'To Date' label is less than input has label 'From Date'",
        },
        { shouldFocus: true }
      );
    } else {
      dispatch(getFromDate(data));
    }
  };
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
        {errors?.toDate && (
          <p className={css.error}>{errors?.toDate?.message}</p>
        )}
      </div>
      <button type="submit" className={classnames(css.btn, css.btnSubmit)}>
        Search Logger
      </button>
      <button
        onClick={clearInput}
        className={classnames(css.btn, css.btnClear)}
      >
        Clear Inputs
      </button>
    </form>
  );
};

export default Form;
