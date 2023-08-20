function Card(props) {
  if (props.theme === "people") {
    return (
      <div className="card">
        <div className="info-card">
          <svg
            width="56"
            height="56"
            viewBox="0 0 84 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M77.6299 95.5H6.37013C4.64454 95.5 2.99025 94.7652 1.83107 93.4844C0.673839 92.2056 0.108409 90.4893 0.280284 88.7759C1.84864 73.0972 11.9463 59.7608 26.6328 53.9712C28.0244 53.4205 29.6113 53.4351 31.0957 54.0098C38.0547 56.7041 45.9453 56.7041 52.9043 54.0098C54.3897 53.4346 55.9746 53.4205 57.3682 53.9717C72.0537 59.7608 82.1514 73.0972 83.7197 88.7759C83.8916 90.4893 83.3262 92.2056 82.169 93.4844C81.0098 94.7652 79.3555 95.5 77.6299 95.5ZM28.7764 58.5689C28.6631 58.5689 28.5586 58.5865 28.4678 58.6221C15.5313 63.7222 6.63673 75.4668 5.25489 89.274C5.2129 89.6988 5.41505 89.9922 5.53907 90.1294C5.66407 90.2681 5.93849 90.5 6.37013 90.5H77.6299C78.0615 90.5 78.3359 90.2681 78.4609 90.1294C78.585 89.9922 78.7871 89.6988 78.7451 89.274C77.3633 75.4668 68.4688 63.7222 55.5332 58.6226C55.3164 58.5381 55.0147 58.5552 54.709 58.6729C46.5938 61.8145 37.4063 61.8145 29.291 58.6729C29.1123 58.6036 28.9365 58.5689 28.7764 58.5689Z"
              fill="black"
            />
            <path
              d="M42 51.0977C28.0498 51.0977 16.7012 39.7485 16.7012 25.7988C16.7012 11.8491 28.0498 0.5 42 0.5C55.9502 0.5 67.2988 11.8491 67.2988 25.7988C67.2988 39.7485 55.9502 51.0977 42 51.0977ZM42 5.5C30.8076 5.5 21.7012 14.606 21.7012 25.7988C21.7012 36.9917 30.8076 46.0977 42 46.0977C53.1924 46.0977 62.2988 36.9917 62.2988 25.7988C62.2988 14.606 53.1924 5.5 42 5.5Z"
              fill="black"
            />
          </svg>
          <h2>{props.info.name}</h2>
        </div>
        <svg
          width="12"
          height="23"
          viewBox="0 0 12 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.4957 11.4265C11.4812 11.1937 11.3892 10.9725 11.2344 10.798L1.83076 0.349432C1.7387 0.246578 1.62725 0.162889 1.50279 0.103188C1.37834 0.0434876 1.24332 0.0089428 1.10549 0.00151844C0.967655 -0.00590593 0.829711 0.0139477 0.699563 0.0599344C0.569415 0.105921 0.449621 0.177138 0.347048 0.269508C0.244476 0.361878 0.16114 0.473573 0.101819 0.59821C0.0424974 0.722847 0.00835619 0.857978 0.00135164 0.995834C-0.00565291 1.13369 0.0146169 1.27157 0.0609998 1.40157C0.107383 1.53158 0.178966 1.65117 0.271648 1.75346L9.04678 11.5L0.271648 21.2465C0.178966 21.3488 0.107383 21.4684 0.0609998 21.5984C0.0146169 21.7284 -0.00565291 21.8663 0.00135164 22.0042C0.00835619 22.142 0.0424974 22.2772 0.101819 22.4018C0.16114 22.5264 0.244476 22.6381 0.347048 22.7305C0.449621 22.8229 0.569415 22.8941 0.699563 22.9401C0.829711 22.9861 0.967655 23.0059 1.10549 22.9985C1.24332 22.9911 1.37834 22.9565 1.50279 22.8968C1.62725 22.8371 1.7387 22.7534 1.83076 22.6506L11.2344 12.202C11.3279 12.097 11.3992 11.9742 11.4441 11.8409C11.489 11.7076 11.5065 11.5667 11.4957 11.4265Z"
            fill="black"
          />
        </svg>
      </div>
    );
  } else if (props.theme === "starships") {
    return (
      <div className="card">
        <div className="info-card">
          <svg
            width="56"
            height="56"
            viewBox="0 0 9 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.56 2H7C6.90621 1.52081 6.66907 1.08141 6.32 0.739998C6.08412 0.49774 5.80065 0.306929 5.48742 0.179574C5.1742 0.0522195 4.83801 -0.00892168 4.5 -1.75793e-06C3.92367 -0.000119385 3.36501 0.19889 2.91855 0.563345C2.47209 0.9278 2.16527 1.43532 2.05 2H1.44C1.05809 2 0.691819 2.15171 0.421766 2.42176C0.151714 2.69182 0 3.05809 0 3.44V14.5C0 14.6326 0.052678 14.7598 0.146446 14.8536C0.240214 14.9473 0.367392 15 0.5 15H3.5C3.63261 15 3.75979 14.9473 3.85355 14.8536C3.94732 14.7598 4 14.6326 4 14.5V13H5V14.5C5 14.6326 5.05268 14.7598 5.14645 14.8536C5.24021 14.9473 5.36739 15 5.5 15H8.5C8.63261 15 8.75979 14.9473 8.85355 14.8536C8.94732 14.7598 9 14.6326 9 14.5V3.44C9 3.05809 8.84829 2.69182 8.57823 2.42176C8.30818 2.15171 7.94191 2 7.56 2ZM4.5 0.999998C4.89702 1.00262 5.27703 1.1615 5.55776 1.44223C5.8385 1.72297 5.99738 2.10298 6 2.5V7.68C6.00077 7.78397 6.03394 7.88511 6.09487 7.96934C6.15581 8.05358 6.2415 8.11673 6.34 8.15C6.52315 8.21545 6.69774 8.30275 6.86 8.41L6.95 8.47C7.09964 8.57436 7.23716 8.69511 7.36 8.83L7.43 8.91C7.55084 9.05439 7.65484 9.21207 7.74 9.38C7.81965 9.54937 7.88003 9.72715 7.92 9.91V10H1.06V9.95C1.1061 9.73785 1.18007 9.53273 1.28 9.34C1.39327 9.1347 1.53463 8.94622 1.7 8.78C1.81075 8.67238 1.93127 8.57529 2.06 8.49L2.18 8.41C2.30651 8.33319 2.44054 8.26953 2.58 8.22C2.64117 8.19168 2.69568 8.15079 2.74 8.1C2.74 8.1 2.8 8.1 2.82 8.04C2.87934 7.955 2.91079 7.85366 2.91 7.75V2.5C2.90963 2.29521 2.9512 2.09251 3.03215 1.9044C3.11309 1.71628 3.2317 1.54674 3.38067 1.40621C3.52963 1.26567 3.70579 1.15713 3.8983 1.08727C4.09081 1.01741 4.29558 0.98771 4.5 0.999998ZM3.5 12H3V11H6V12H3.5ZM1 8V3.44C1 3.3233 1.04636 3.21139 1.12887 3.12887C1.21139 3.04636 1.3233 3 1.44 3H2V7.34C1.81756 7.42723 1.6435 7.531 1.48 7.65C1.34195 7.75012 1.21159 7.86043 1.09 7.98L1 8ZM3 14H1V11H2V12.5C2 12.6326 2.05268 12.7598 2.14645 12.8536C2.24021 12.9473 2.36739 13 2.5 13H3V14ZM8 14H6V13H6.5C6.63261 13 6.75979 12.9473 6.85355 12.8536C6.94732 12.7598 7 12.6326 7 12.5V11H8V14ZM7.63 7.73L7.49 7.63C7.33468 7.52329 7.17079 7.42963 7 7.35V3H7.56C7.6767 3 7.78861 3.04636 7.87113 3.12887C7.95364 3.21139 8 3.3233 8 3.44V8H7.93C7.83539 7.90419 7.73521 7.81403 7.63 7.73Z"
              fill="black"
            />
          </svg>
          <h2>{props.info.name}</h2>
        </div>
        <svg
          width="12"
          height="23"
          viewBox="0 0 12 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.4957 11.4265C11.4812 11.1937 11.3892 10.9725 11.2344 10.798L1.83076 0.349432C1.7387 0.246578 1.62725 0.162889 1.50279 0.103188C1.37834 0.0434876 1.24332 0.0089428 1.10549 0.00151844C0.967655 -0.00590593 0.829711 0.0139477 0.699563 0.0599344C0.569415 0.105921 0.449621 0.177138 0.347048 0.269508C0.244476 0.361878 0.16114 0.473573 0.101819 0.59821C0.0424974 0.722847 0.00835619 0.857978 0.00135164 0.995834C-0.00565291 1.13369 0.0146169 1.27157 0.0609998 1.40157C0.107383 1.53158 0.178966 1.65117 0.271648 1.75346L9.04678 11.5L0.271648 21.2465C0.178966 21.3488 0.107383 21.4684 0.0609998 21.5984C0.0146169 21.7284 -0.00565291 21.8663 0.00135164 22.0042C0.00835619 22.142 0.0424974 22.2772 0.101819 22.4018C0.16114 22.5264 0.244476 22.6381 0.347048 22.7305C0.449621 22.8229 0.569415 22.8941 0.699563 22.9401C0.829711 22.9861 0.967655 23.0059 1.10549 22.9985C1.24332 22.9911 1.37834 22.9565 1.50279 22.8968C1.62725 22.8371 1.7387 22.7534 1.83076 22.6506L11.2344 12.202C11.3279 12.097 11.3992 11.9742 11.4441 11.8409C11.489 11.7076 11.5065 11.5667 11.4957 11.4265Z"
            fill="black"
          />
        </svg>
      </div>
    );
  } else if (props.theme === "planets") {
    return (
      <div className="card">
        <div className="info-card">
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 16C9.58225 16 11.129 15.5308 12.4446 14.6518C13.7602 13.7727 14.7855 12.5233 15.391 11.0615C15.9965 9.59966 16.155 7.99113 15.8463 6.43928C15.5376 4.88743 14.7757 3.46197 13.6569 2.34315C12.538 1.22433 11.1126 0.462403 9.56072 0.153721C8.00887 -0.15496 6.40034 0.00346625 4.93853 0.608967C3.47672 1.21447 2.22729 2.23985 1.34824 3.55544C0.469192 4.87103 0 6.41775 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16Z"
              fill="black"
            />
            <path
              d="M44.72 40L43.99 40.09C43.9392 41.5745 43.3395 42.9875 42.307 44.0554C41.2745 45.1233 39.8826 45.7702 38.4006 45.871C36.9186 45.9718 35.4519 45.5193 34.2843 44.601C33.1167 43.6827 32.3313 42.364 32.08 40.9C30.69 41 29.32 41 28 41C22.411 41.0236 16.8262 40.6896 11.28 40C10.82 40 10.37 39.89 9.93995 39.82L9.19995 39.71C9.86023 44.2246 12.1231 48.351 15.575 51.3347C19.0269 54.3185 23.4372 55.9604 28 55.9604C32.5627 55.9604 36.973 54.3185 40.4249 51.3347C43.8768 48.351 46.1397 44.2246 46.7999 39.71L46.0499 39.82C45.6299 39.92 45.19 40 44.72 40Z"
              fill="black"
            />
            <path
              d="M46.07 31.1501C44.8301 27.3341 42.4139 24.0086 39.1678 21.6502C35.9217 19.2918 32.0124 18.0216 28 18.0216C23.9876 18.0216 20.0783 19.2918 16.8322 21.6502C13.5861 24.0086 11.1699 27.3341 9.93 31.1501C0 32.6101 0 34.7101 0 35.5001C0 36.7101 1 38.5001 9.2 39.7401C9.0977 39.0573 9.03094 38.3697 9 37.6801C4 36.8601 2.34 35.9001 2 35.5001C2.33 35.0901 4.1 34.1001 9.34 33.2601C9.10473 34.4926 8.99085 35.7453 9 37.0001C9 37.2301 9 37.4501 9 37.6801L10.22 37.8701L11 38.0001C16.6381 38.7112 22.3174 39.0453 28 39.0001C29.33 39.0001 30.7 39.0001 32.1 38.9401C32.3375 37.625 33.0073 36.4268 34.0032 35.5356C34.999 34.6444 36.2638 34.1112 37.5971 34.0204C38.9304 33.9297 40.2558 34.2867 41.3632 35.0348C42.4706 35.7829 43.2965 36.8793 43.71 38.1501L45 38.0001L45.78 37.8801L47 37.6801C47 37.4501 47 37.2301 47 37.0001C46.9993 35.7443 46.8753 34.4916 46.63 33.2601C51.87 34.1001 53.63 35.0901 53.97 35.5001C53.65 35.9001 51.97 36.8601 46.97 37.6801C46.9424 38.3696 46.879 39.0571 46.78 39.7401C55.01 38.4601 55.98 36.7401 55.98 35.5001C56 34.7101 56 32.6101 46.07 31.1501Z"
              fill="black"
            />
          </svg>
          <h2>{props.info.name}</h2>
        </div>
        <svg
          width="12"
          height="23"
          viewBox="0 0 12 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.4957 11.4265C11.4812 11.1937 11.3892 10.9725 11.2344 10.798L1.83076 0.349432C1.7387 0.246578 1.62725 0.162889 1.50279 0.103188C1.37834 0.0434876 1.24332 0.0089428 1.10549 0.00151844C0.967655 -0.00590593 0.829711 0.0139477 0.699563 0.0599344C0.569415 0.105921 0.449621 0.177138 0.347048 0.269508C0.244476 0.361878 0.16114 0.473573 0.101819 0.59821C0.0424974 0.722847 0.00835619 0.857978 0.00135164 0.995834C-0.00565291 1.13369 0.0146169 1.27157 0.0609998 1.40157C0.107383 1.53158 0.178966 1.65117 0.271648 1.75346L9.04678 11.5L0.271648 21.2465C0.178966 21.3488 0.107383 21.4684 0.0609998 21.5984C0.0146169 21.7284 -0.00565291 21.8663 0.00135164 22.0042C0.00835619 22.142 0.0424974 22.2772 0.101819 22.4018C0.16114 22.5264 0.244476 22.6381 0.347048 22.7305C0.449621 22.8229 0.569415 22.8941 0.699563 22.9401C0.829711 22.9861 0.967655 23.0059 1.10549 22.9985C1.24332 22.9911 1.37834 22.9565 1.50279 22.8968C1.62725 22.8371 1.7387 22.7534 1.83076 22.6506L11.2344 12.202C11.3279 12.097 11.3992 11.9742 11.4441 11.8409C11.489 11.7076 11.5065 11.5667 11.4957 11.4265Z"
            fill="black"
          />
        </svg>
      </div>
    );
  } else if (props.theme === "species") {
    return (
      <div className="card">
        <div className="info-card">
          <svg
            width="56"
            height="56"
            viewBox="0 0 187 241"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M93 0C145 0 187 42 187 93C187 139 149 241 93 241C38 241 0 139 0 93C0 42 42 0 93 0ZM93 9C47 9 9 47 9 93C9 140 47 232 93 232C140 232 178 140 178 93C178 47 140 9 93 9ZM126 99C138 81 154 73 161 81C168 90 164 112 152 130C140 149 124 157 116 149C109 140 113 118 126 99ZM61 99C49 81 33 73 26 81C18 90 23 112 35 130C47 149 63 157 70 149C78 140 74 118 61 99ZM133 104C128 111 116 135 123 143C129 146 142 129 145 126C149 119 161 94 155 87L154 86C149 84 135 100 133 104ZM54 104C52 100 38 84 33 86C32 86 32 87 32 87C26 94 37 119 42 126C45 129 58 146 64 143C70 135 59 111 54 104Z"
              fill="black"
            />
          </svg>
          <h2>{props.info.name}</h2>
        </div>
        <svg
          width="12"
          height="23"
          viewBox="0 0 12 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.4957 11.4265C11.4812 11.1937 11.3892 10.9725 11.2344 10.798L1.83076 0.349432C1.7387 0.246578 1.62725 0.162889 1.50279 0.103188C1.37834 0.0434876 1.24332 0.0089428 1.10549 0.00151844C0.967655 -0.00590593 0.829711 0.0139477 0.699563 0.0599344C0.569415 0.105921 0.449621 0.177138 0.347048 0.269508C0.244476 0.361878 0.16114 0.473573 0.101819 0.59821C0.0424974 0.722847 0.00835619 0.857978 0.00135164 0.995834C-0.00565291 1.13369 0.0146169 1.27157 0.0609998 1.40157C0.107383 1.53158 0.178966 1.65117 0.271648 1.75346L9.04678 11.5L0.271648 21.2465C0.178966 21.3488 0.107383 21.4684 0.0609998 21.5984C0.0146169 21.7284 -0.00565291 21.8663 0.00135164 22.0042C0.00835619 22.142 0.0424974 22.2772 0.101819 22.4018C0.16114 22.5264 0.244476 22.6381 0.347048 22.7305C0.449621 22.8229 0.569415 22.8941 0.699563 22.9401C0.829711 22.9861 0.967655 23.0059 1.10549 22.9985C1.24332 22.9911 1.37834 22.9565 1.50279 22.8968C1.62725 22.8371 1.7387 22.7534 1.83076 22.6506L11.2344 12.202C11.3279 12.097 11.3992 11.9742 11.4441 11.8409C11.489 11.7076 11.5065 11.5667 11.4957 11.4265Z"
            fill="black"
          />
        </svg>
      </div>
    );
  } else if (props.theme === "films") {
    return (
      <div className="card">
        <div className="info-card">
          <svg
            width="56"
            height="56"
            viewBox="0 0 50 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.24075 0.529297C3.26946 0.529297 0.793701 3.00517 0.793701 5.97643V49.5742C0.793701 52.5454 3.26946 55 6.24075 55H15.7784H34.8378H44.3701C47.3414 55 49.8172 52.5454 49.8172 49.5742V5.97643C49.8172 3.00517 47.3414 0.529297 44.3701 0.529297H34.8378H15.7784H6.24075ZM6.24075 5.97643H13.0602V12.7907H11.8101H6.24075V5.97643ZM37.5719 5.97643H44.3701V12.7907H38.5028H37.572L37.5719 5.97643ZM6.24075 18.2428H11.8101H13.0602V25.0408H6.24075V18.2428ZM37.5719 18.2428H38.5028H44.3701V25.0408H37.5719L37.5719 18.2428ZM6.24075 30.4879H13.0602V37.2808H11.6931H6.24075V30.4879ZM37.5719 30.4879H44.3701V37.2224H38.0134H37.5719L37.5719 30.4879ZM37.5719 42.6745H38.0134H44.3701V49.5742H37.5719L37.5719 42.6745ZM6.24075 42.7367H11.6931H13.0602V49.5717H6.24075V42.7367Z"
              fill="black"
            />
          </svg>
          <h2>{props.info.title}</h2>
        </div>
        <svg
          width="12"
          height="23"
          viewBox="0 0 12 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.4957 11.4265C11.4812 11.1937 11.3892 10.9725 11.2344 10.798L1.83076 0.349432C1.7387 0.246578 1.62725 0.162889 1.50279 0.103188C1.37834 0.0434876 1.24332 0.0089428 1.10549 0.00151844C0.967655 -0.00590593 0.829711 0.0139477 0.699563 0.0599344C0.569415 0.105921 0.449621 0.177138 0.347048 0.269508C0.244476 0.361878 0.16114 0.473573 0.101819 0.59821C0.0424974 0.722847 0.00835619 0.857978 0.00135164 0.995834C-0.00565291 1.13369 0.0146169 1.27157 0.0609998 1.40157C0.107383 1.53158 0.178966 1.65117 0.271648 1.75346L9.04678 11.5L0.271648 21.2465C0.178966 21.3488 0.107383 21.4684 0.0609998 21.5984C0.0146169 21.7284 -0.00565291 21.8663 0.00135164 22.0042C0.00835619 22.142 0.0424974 22.2772 0.101819 22.4018C0.16114 22.5264 0.244476 22.6381 0.347048 22.7305C0.449621 22.8229 0.569415 22.8941 0.699563 22.9401C0.829711 22.9861 0.967655 23.0059 1.10549 22.9985C1.24332 22.9911 1.37834 22.9565 1.50279 22.8968C1.62725 22.8371 1.7387 22.7534 1.83076 22.6506L11.2344 12.202C11.3279 12.097 11.3992 11.9742 11.4441 11.8409C11.489 11.7076 11.5065 11.5667 11.4957 11.4265Z"
            fill="black"
          />
        </svg>
      </div>
    );
  } else if (props.theme === "vehicles") {
    return (
      <div className="card">
        <div className="info-card">
          <svg
            width="56"
            height="56"
            viewBox="0 0 95 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M92.5 34.1H91.8V27.5C91.8 22.4 88 18.2 83 17.6L68.9 16L63.5 5.4C61.8 2.1 58.4 0 54.6 0H31.9C25.8 0 20.4 3.6 18.1 9.3L15.8 15.1L9.4 18.2C5.7 20 3.3 23.8 3.3 28V34.1H2.5C1.1 34.1 0 35.2 0 36.6C0 38 1.1 39.1 2.5 39.1H13.1C13.9 44.2 18.3 48.1 23.6 48.1C28.9 48.1 33.3 44.2 34.1 39.1H61.2C62 44.2 66.4 48.1 71.7 48.1C77 48.1 81.4 44.2 82.2 39.1H92.5C93.9 39.1 95 38 95 36.6C95 35.3 93.9 34.1 92.5 34.1ZM8.3 28C8.3 25.8 9.6 23.7 11.6 22.8L18.9 19.2C19.5 18.9 19.9 18.4 20.1 17.9L22.8 11.1C24.3 7.4 27.9 5 31.9 5H54.6C56.4 5 58.1 6 59 7.7L65.1 19.5C65.5 20.3 66.2 20.8 67.1 20.9L82.5 22.7C85 23 86.8 25.1 86.8 27.6V34.1H81.8C80.4 29.9 76.4 26.9 71.8 26.9C67.1 26.9 63.2 29.9 61.8 34.1H33.8C32.4 29.9 28.4 26.9 23.8 26.9C19.2 26.9 15.2 29.9 13.8 34.1H8.5V28H8.3ZM23.6 43.1C20.5 43.1 18 40.6 18 37.5C18 34.4 20.5 31.9 23.6 31.9C26.7 31.9 29.2 34.4 29.2 37.5C29.2 40.6 26.7 43.1 23.6 43.1ZM71.7 43.1C68.6 43.1 66.1 40.6 66.1 37.5C66.1 34.4 68.6 31.9 71.7 31.9C74.8 31.9 77.3 34.4 77.3 37.5C77.2 40.6 74.7 43.1 71.7 43.1Z"
              fill="black"
            />
          </svg>

          <h2>{props.info.name}</h2>
        </div>
        <svg
          width="12"
          height="23"
          viewBox="0 0 12 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.4957 11.4265C11.4812 11.1937 11.3892 10.9725 11.2344 10.798L1.83076 0.349432C1.7387 0.246578 1.62725 0.162889 1.50279 0.103188C1.37834 0.0434876 1.24332 0.0089428 1.10549 0.00151844C0.967655 -0.00590593 0.829711 0.0139477 0.699563 0.0599344C0.569415 0.105921 0.449621 0.177138 0.347048 0.269508C0.244476 0.361878 0.16114 0.473573 0.101819 0.59821C0.0424974 0.722847 0.00835619 0.857978 0.00135164 0.995834C-0.00565291 1.13369 0.0146169 1.27157 0.0609998 1.40157C0.107383 1.53158 0.178966 1.65117 0.271648 1.75346L9.04678 11.5L0.271648 21.2465C0.178966 21.3488 0.107383 21.4684 0.0609998 21.5984C0.0146169 21.7284 -0.00565291 21.8663 0.00135164 22.0042C0.00835619 22.142 0.0424974 22.2772 0.101819 22.4018C0.16114 22.5264 0.244476 22.6381 0.347048 22.7305C0.449621 22.8229 0.569415 22.8941 0.699563 22.9401C0.829711 22.9861 0.967655 23.0059 1.10549 22.9985C1.24332 22.9911 1.37834 22.9565 1.50279 22.8968C1.62725 22.8371 1.7387 22.7534 1.83076 22.6506L11.2344 12.202C11.3279 12.097 11.3992 11.9742 11.4441 11.8409C11.489 11.7076 11.5065 11.5667 11.4957 11.4265Z"
            fill="black"
          />
        </svg>
      </div>
    );
  }
}

export default Card;