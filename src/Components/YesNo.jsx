import { useState } from "react"
function YesNoBox() {


    return(
        <>
      <div className="dark:mx-auto items-center flex flex-col">
        <p className="dark:h-auto dark:text-center dark:font-bold dark:text-[1.7em] order-0 dark:w-[100%] break-words">
          
          Question
        </p>
        <div className="dark:m-[0%] dark:mx-[20px] dark:p-[5px] dark:w-[20%]">
          <div className="flex items-center w-max gap-x-2 float-left dark:mx-[20%]">
            <input name="radioQ" id="dkeyac" type="radio" />
            <label for="dkeyac">Yes</label>
          </div>
          <div className="flex items-center w-max gap-x-2 dark:mx-[20%]">
            <input name="radioQ" id="eqnabA" type="radio" />
            <label for="eqnabA">No</label>
          </div>
        </div>
        <div className="dark:mx-[3em] dark:h-auto dark:w-auto">
          <button
            className="text-white bg-primary px-4 py-2 rounded-global flex items-center float-left dark:m-[1em] dark:bg-secondary-500"
            type="button">
            <span>Next Question</span>
          </button>
        </div>
      </div>
    </>
    )

    }

    export default YesNoBox