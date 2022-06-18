export const PowerBtn = (props) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width={40}
    height={40}
    {...props}
  >
    <path
      fill="#3d0c02"
      d="M7.9 256C7.9 119 119 7.9 256 7.9S504.1 119 504.1 256 393 504.1 256 504.1 7.9 393 7.9 256z"
    />
    <path
      className="hoverable"
      fill="#feffee"
      d="M408.1 206.8 258 131.9c-1.3-.6-2.7-.6-4 0l-150.2 74.9c-1.7.8-2.7 2.4-2.7 4.3v29.6c0 1.6.8 3.1 2.2 4 1.4.9 3.1 1 4.5.3L256 171l148.1 74c.6.3 1.3.5 2 .5.9 0 1.8-.2 2.5-.7 1.4-.9 2.2-2.4 2.2-4V211c0-1.8-1-3.5-2.7-4.2z"
    />
    <path
      className="hoverable"
      fill="#feffee"
      d="m380.5 245.8-124.5-62-124.5 62v115h69v-88.2H248v88.2h132.5z"
    />
    <path fill="#3d0c02" d="M263.7 272.6h32v32h-32z" />
  </svg>
  )
}

export const Xing = (props) => {
  return (
      <svg
        aria-hidden="true"
        data-prefix="fab"
        data-icon="xing-square"
        className="prefix__svg-inline--fa prefix__fa-xing-square prefix__fa-w-16"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        {...props}
      >
        <path 
          fill={props.fill}
          d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM140.4 320.2H93.8c-5.5 0-8.7-5.3-6-10.3l49.3-86.7c.1 0 .1-.1 0-.2l-31.4-54c-3-5.6.2-10.1 6-10.1h46.6c5.2 0 9.5 2.9 12.9 8.7l31.9 55.3c-1.3 2.3-18 31.7-50.1 88.2-3.5 6.2-7.7 9.1-12.6 9.1zm219.7-214.1L257.3 286.8v.2l65.5 119c2.8 5.1.1 10.1-6 10.1h-46.6c-5.5 0-9.7-2.9-12.9-8.7l-66-120.3c2.3-4.1 36.8-64.9 103.4-182.3 3.3-5.8 7.4-8.7 12.5-8.7h46.9c5.7-.1 8.8 4.7 6 10z" />

      </svg>
    )
}

export const Github = (props) => {
    return (
        <svg
          aria-hidden="true"
          data-prefix="fab"
          data-icon="github"
          className="prefix__svg-inline--fa prefix__fa-github prefix__fa-w-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
          {...props}
        >
          <path
            fill={props.fill}
            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
          />
        </svg>
      )
}

export const Linkedin = (props) => {
    return (
        <svg
          aria-hidden="true"
          data-prefix="fab"
          data-icon="linkedin"
          className="prefix__svg-inline--fa prefix__fa-linkedin prefix__fa-w-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          {...props}
        >
          <path
            fill={props.fill}
            d="M48.875,0C21.882,0,0,21.882,0,48.875S21.882,97.75,48.875,97.75S97.75,75.868,97.75,48.875S75.868,0,48.875,0z
            M30.562,81.966h-13.74V37.758h13.74V81.966z M23.695,31.715c-4.404,0-7.969-3.57-7.969-7.968c0.001-4.394,3.565-7.964,7.969-7.964
            c4.392,0,7.962,3.57,7.962,7.964C31.657,28.146,28.086,31.715,23.695,31.715z M82.023,81.966H68.294V60.467
            c0-5.127-0.095-11.721-7.142-11.721c-7.146,0-8.245,5.584-8.245,11.35v21.869H39.179V37.758h13.178v6.041h0.185
            c1.835-3.476,6.315-7.14,13-7.14c13.913,0,16.481,9.156,16.481,21.059V81.966z"
          />
        </svg>
      )
}

export const Facebook = (props) => {
    return (
        <svg
          aria-hidden="true"
          data-prefix="fab"
          data-icon="facebook"
          className="prefix__svg-inline--fa prefix__fa-facebook prefix__fa-w-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          {...props}
        >
          <path
            fill={props.fill}
            d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
          />
        </svg>
      )
}

export const Instagram = (props) => {
    return (
        <svg
          aria-hidden="true"
          data-prefix="fab"
          data-icon="instagram"
          className="prefix__svg-inline--fa prefix__fa-instagram prefix__fa-w-18"
          xmlns="http://www.w3.org/2000/svg"
          // viewBox="0 0 576 512"
          {...props}
        >
          <path
            fill={props.fill}
            d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
          />
        </svg>
      )
}

export const Hexagon = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" {...props}>
    <path
      d="m250 19.42 199.69 115.29v230.58L250 480.58 50.31 365.29V134.71z"
      fill="none"
      stroke={props.fill}
      strokeLinecap="round"
      strokeWidth={18.446}
      
    />
    <g transform="translate(36.596 -434.91) scale(.85362)" fill={props.fill}>
      <path
        transform="translate(0 552.36)"
        d="M325.53 95.428c-5.485-.076-11.385 1.374-17.395 3.941-10.684 4.565-22.262 12.75-34.439 23.87-11.437 10.443-23.382 23.528-35.287 38.687-15.423-11.56-30.347-21.108-44.098-28.236-14.641-7.59-27.944-12.499-39.445-14.143-11.501-1.643-21.744.039-28.51 6.805-6.766 6.766-8.449 17.008-6.805 28.51 1.216 8.504 4.228 17.998 8.778 28.285 2.507-2.215 5.567-3.815 8.955-4.517-4.156-9.516-6.819-18.076-7.834-25.182-1.397-9.77.224-16.271 3.978-20.025 2.816-2.816 7.175-4.43 13.301-4.471 2.042-.014 4.28.145 6.723.494 9.77 1.396 22.268 5.87 36.258 13.123 13.118 6.8 27.569 16.044 42.6 27.305-6.999 9.348-13.947 19.395-20.74 30.037-18.428 5.829-35.595 12.374-51.057 19.352a345.329 345.329 0 0 1-5.262-7.898 19.616 19.616 0 0 1-8.578 5.183 344.542 344.542 0 0 0 4.629 7.006c-11.035 5.342-21.061 10.89-29.871 16.523-13.893 8.884-24.794 17.95-31.969 27.09-7.174 9.139-10.842 18.849-8.365 28.092 2.476 9.243 10.509 15.82 21.29 20.148 10.783 4.327 24.758 6.727 41.23 7.475 3.58.162 7.297.23 11.103.232a250.175 250.175 0 0 0-2.649 10.785c-3.541 16.106-4.84 30.227-3.45 41.762s5.664 20.995 13.95 25.779c8.287 4.784 18.617 3.756 29.301-.809 3.986-1.703 8.097-3.91 12.316-6.586a19.704 19.704 0 0 1-5.972-8.084c-3.62 2.264-7.063 4.104-10.271 5.475-9.077 3.878-15.775 3.998-20.373 1.344-4.598-2.655-7.842-8.516-9.022-18.314-1.18-9.799-.095-23.03 3.29-38.42.925-4.212 2.037-8.599 3.298-13.115 20.332-.712 43.258-3.5 67.58-8.416a481.28 481.28 0 0 0 20.932 17.463c-9.038 11.5-18.048 21.709-26.748 30.379a19.769 19.769 0 0 1 6.777 7.363c9.155-9.087 18.55-19.71 27.922-31.645 15.423 11.56 30.347 21.108 44.098 28.236 14.641 7.59 27.942 12.5 39.443 14.143 11.501 1.644 21.746-.038 28.512-6.805 6.767-6.766 8.449-17.01 6.805-28.512-1.644-11.5-6.553-24.803-14.143-39.443-4.813-9.283-10.724-19.102-17.609-29.246 11.035-5.342 21.063-10.89 29.873-16.523 13.893-8.884 24.796-17.949 31.971-27.088 7.174-9.138 10.838-18.853 8.361-28.096s-10.505-15.819-21.287-20.146a73.846 73.846 0 0 0-4.162-1.523c.008.226.018.452.018.68 0 3.29-.831 6.394-2.283 9.123.93.323 1.84.653 2.703 1 9.16 3.676 13.977 8.329 15.352 13.457 1.374 5.128-.472 11.567-6.567 19.33-6.094 7.763-16.217 16.35-29.492 24.84-8.8 5.628-19.006 11.222-30.316 16.629-6.479-9.013-13.668-18.227-21.53-27.521 8.888-18.861 15.964-37.008 21.071-53.707.406-.004.826-.02 1.229-.022 3.808-.023 7.474.049 11.027.19a19.396 19.396 0 0 1-.305-3.319c0-2.339.437-4.576 1.2-6.66a255.39 255.39 0 0 0-10.278-.203 250.086 250.086 0 0 0 2.649-10.785c3.542-16.106 4.838-30.227 3.449-41.762s-5.662-20.993-13.949-25.777c-3.625-2.093-7.642-3.076-11.908-3.135zm-.355 9.986c2.838.017 5.252.648 7.263 1.809 4.598 2.654 7.842 8.515 9.022 18.314s.095 23.026-3.29 38.416c-.926 4.212-2.037 8.599-3.298 13.115-20.332.712-43.258 3.5-67.58 8.416a481.282 481.282 0 0 0-20.934-17.461c11.604-14.767 23.17-27.438 34.082-37.402 11.636-10.626 22.549-18.177 31.625-22.055 5.105-2.181 9.46-3.174 13.109-3.153zm-84.916 70.555a466.46 466.46 0 0 1 14.799 12.152 544.277 544.277 0 0 0-20.291 5.008 552.738 552.738 0 0 0-8.3 2.295c4.561-6.784 9.17-13.28 13.792-19.455zm123.86 1.655a11.557 11.557 0 0 0-1.747 6.127c0 1.344.235 2.626.649 3.822 7.525.616 14.33 1.633 20.23 3.023a11.531 11.531 0 0 0 2.232-6.845c0-1.047-.149-2.055-.404-3.016-6.308-1.465-13.333-2.484-20.961-3.111zm-223.27 8.62c-3.656.12-6.852 1.895-8.877 4.614.568 1.146 1.125 2.286 1.728 3.45 2.518 4.856 5.344 9.863 8.445 14.983a11.481 11.481 0 0 0 8.672-5.006c-3.046-5.008-5.802-9.88-8.238-14.58-.606-1.17-1.163-2.312-1.73-3.46zm190.99.964c-4.483 14.077-10.416 29.285-17.682 45.098a536.705 536.705 0 0 0-22.518-23.938 543.83 543.83 0 0 0-15.068-14.482c19.792-3.684 38.48-5.897 55.268-6.678zm-67.445 9.103a520.498 520.498 0 0 1 45.094 45.857 520.579 520.579 0 0 1-17.15 32.27 529.243 529.243 0 0 1-10.383 17.195 529.464 529.464 0 0 1-19.297 5.578 526.054 526.054 0 0 1-27.037 6.479 520.495 520.495 0 0 1-45.094-45.857 520.577 520.577 0 0 1 17.152-32.271c3.4-5.89 6.87-11.614 10.38-17.195a529.58 529.58 0 0 1 19.298-5.578 525.779 525.779 0 0 1 27.037-6.477zm-61.01 16.828a537.415 537.415 0 0 0-19.922 36.373c-6.143-7.405-11.844-14.735-17.062-21.914 11.42-5.082 23.813-9.948 36.982-14.459zm-46.248 18.734c6.478 9.012 13.669 18.226 21.53 27.52-8.889 18.861-15.962 37.008-21.07 53.707-4.689.05-9.215-.012-13.522-.207-15.742-.714-28.801-3.09-37.961-6.766-9.16-3.675-13.98-8.328-15.354-13.457-1.375-5.128.473-11.567 6.568-19.33 6.095-7.763 16.217-16.348 29.492-24.838 8.801-5.628 19.005-11.22 30.316-16.629zm159.41 18.615c6.142 7.405 11.843 14.733 17.06 21.912-11.418 5.082-23.81 9.948-36.978 14.46a536.614 536.614 0 0 0 19.918-36.37zm-130.69 17.207a537.21 537.21 0 0 0 22.518 23.938 543.274 543.274 0 0 0 15.068 14.482c-19.793 3.684-38.48 5.896-55.268 6.678 4.482-14.076 10.416-29.285 17.682-45.098zm153.64 13.04c7.092 10.338 13.133 20.285 17.94 29.56 7.253 13.99 11.726 26.487 13.122 36.258 1.396 9.77-.223 16.27-3.977 20.023-3.754 3.754-10.255 5.375-20.025 3.979-9.77-1.397-22.268-5.87-36.258-13.121-13.118-6.8-27.57-16.046-42.6-27.307 6.999-9.349 13.949-19.395 20.742-30.037 18.428-5.83 35.593-12.378 51.055-19.355zm-65.955 23.841a470.871 470.871 0 0 1-13.791 19.455 466.5 466.5 0 0 1-14.801-12.152 544.316 544.316 0 0 0 20.293-5.008c2.789-.747 5.554-1.513 8.298-2.295zm-52.656 63.566c-.438.407-.881.836-1.317 1.234-4.991 4.558-9.835 8.513-14.473 11.893a11.459 11.459 0 0 0 6.188 7.91c4.89-3.588 9.906-7.739 15.029-12.417.394-.36.795-.749 1.191-1.116a11.462 11.462 0 0 0-6.62-7.503z"
        color="#000"
        style={{
          blockProgression: "tb",
          isolation: "auto",
          mixBlendMode: "normal",
          textDecorationColor: "#000",
          textDecorationLine: "none",
          textDecorationStyle: "solid",
          textIndent: 0,
          textTransform: "none",
          whiteSpace: "normal",
        }}
      />
      <circle cx={250} cy={802.36} r={23.335} />
      <path d="M389.48 736.11a15.556 15.556 0 0 1-15.556 15.556 15.556 15.556 0 0 1-15.556-15.556 15.556 15.556 0 0 1 15.556-15.556 15.556 15.556 0 0 1 15.556 15.556zM231.94 931.17a15.556 15.556 0 0 1-15.556 15.556 15.556 15.556 0 0 1-15.556-15.556 15.556 15.556 0 0 1 15.556-15.556 15.556 15.556 0 0 1 15.556 15.556zM156.78 750.14a15.556 15.556 0 0 1-15.556 15.556 15.556 15.556 0 0 1-15.556-15.556 15.556 15.556 0 0 1 15.556-15.556 15.556 15.556 0 0 1 15.556 15.556z" />
    </g>
  </svg>
  )
}

export const Developer = (props) => { 
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="laptop-code"
      className="prefix__svg-inline--fa prefix__fa-laptop-code prefix__fa-w-20"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
      {...props}
    >
      <path
        fill={props.fill}
        d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"
      />
    </svg>
  )
}