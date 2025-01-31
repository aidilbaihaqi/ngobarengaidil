export default function Header() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
        <nav className="mt-4 relative max-w-4xl w-full bg-white border border-gray-200 rounded-[2rem] mx-2 py-2.5 md:flex md:items-center md:justify-between md:py-0 md:px-4 md:mx-auto dark:bg-neutral-900 dark:border-neutral-700">
          <div className="px-4 md:px-0 flex justify-between items-center">
            {/* Logo */}
            <div>
              <a className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80" href="#" aria-label="ngobarengaidil">

                <svg className="w-30 h-auto" width="219" height="32" viewBox="0 0 219 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_302_51)">
                  <path d="M47.3292 25V12.9167H50.4708V14.2458C50.9005 13.6819 51.4308 13.2523 52.0618 12.9569C52.6928 12.6616 53.3708 12.5139 54.0958 12.5139C54.9551 12.5139 55.7539 12.722 56.4924 13.1382C57.2442 13.541 57.8484 14.1384 58.3049 14.9306C58.7748 15.7093 59.0097 16.6558 59.0097 17.7701V25H55.5056V18.2333C55.5056 17.562 55.3042 16.9646 54.9014 16.441C54.4986 15.9174 53.9213 15.6556 53.1694 15.6556C52.5653 15.6556 52.0215 15.8637 51.5382 16.2799C51.0683 16.6826 50.8333 17.3204 50.8333 18.1931V25H47.3292ZM66.7091 31.4444C65.7693 31.4444 64.8697 31.3035 64.0105 31.0215C63.1646 30.753 62.4329 30.3838 61.8153 29.9139L62.6612 26.45C63.0908 27.0273 63.6547 27.4972 64.3528 27.8597C65.051 28.2356 65.8364 28.4236 66.7091 28.4236C67.9443 28.4236 68.9042 28.0678 69.5889 27.3563C70.2737 26.6581 70.616 25.7586 70.616 24.6576V23.8118C70.1595 24.2817 69.6091 24.6509 68.9646 24.9194C68.3336 25.188 67.6355 25.3222 66.8702 25.3222C65.7558 25.3222 64.7422 25.0336 63.8292 24.4562C62.9162 23.8789 62.1845 23.1137 61.6341 22.1604C61.097 21.1937 60.8285 20.1264 60.8285 18.9583C60.8285 17.7903 61.097 16.7229 61.6341 15.7563C62.1845 14.7896 62.9162 14.0243 63.8292 13.4604C64.7422 12.8831 65.7558 12.5944 66.8702 12.5944C67.6489 12.5944 68.3605 12.7354 69.0049 13.0174C69.6493 13.2859 70.1998 13.6618 70.6563 14.1451V12.9167H73.6771V25.1611C73.6771 26.4769 73.3549 27.6046 72.7105 28.5444C72.066 29.4843 71.2135 30.2025 70.1528 30.6993C69.0922 31.1961 67.9443 31.4444 66.7091 31.4444ZM67.2931 22.241C67.8838 22.241 68.4209 22.0933 68.9042 21.7979C69.3875 21.5025 69.7702 21.1065 70.0521 20.6097C70.3475 20.113 70.4952 19.5625 70.4952 18.9583C70.4952 18.3542 70.3475 17.8037 70.0521 17.3069C69.7702 16.8102 69.3875 16.4141 68.9042 16.1187C68.4209 15.8234 67.8838 15.6757 67.2931 15.6757C66.7024 15.6757 66.1653 15.8234 65.682 16.1187C65.1987 16.4141 64.8093 16.8102 64.5139 17.3069C64.232 17.8037 64.091 18.3542 64.091 18.9583C64.091 19.5625 64.232 20.113 64.5139 20.6097C64.8093 21.1065 65.1987 21.5025 65.682 21.7979C66.1653 22.0933 66.7024 22.241 67.2931 22.241ZM82.25 25.4028C81.0551 25.4028 79.9609 25.1141 78.9674 24.5368C77.9738 23.9595 77.1817 23.1808 76.591 22.2007C76.0137 21.2206 75.725 20.1398 75.725 18.9583C75.725 17.7634 76.0137 16.6826 76.591 15.716C77.1817 14.7359 77.9738 13.9572 78.9674 13.3799C79.9609 12.8025 81.0551 12.5139 82.25 12.5139C83.4583 12.5139 84.5525 12.8025 85.5326 13.3799C86.5262 13.9572 87.3116 14.7359 87.8889 15.716C88.4796 16.6826 88.775 17.7634 88.775 18.9583C88.775 20.1398 88.4796 21.2206 87.8889 22.2007C87.3116 23.1808 86.5262 23.9595 85.5326 24.5368C84.5525 25.1141 83.4583 25.4028 82.25 25.4028ZM82.25 22.2611C82.8542 22.2611 83.3979 22.1134 83.8813 21.8181C84.378 21.5227 84.7674 21.1266 85.0493 20.6299C85.3447 20.1197 85.4924 19.5625 85.4924 18.9583C85.4924 18.3407 85.3447 17.7836 85.0493 17.2868C84.7674 16.79 84.378 16.394 83.8813 16.0986C83.3979 15.8032 82.8542 15.6556 82.25 15.6556C81.6458 15.6556 81.0954 15.8032 80.5986 16.0986C80.1153 16.394 79.7259 16.79 79.4306 17.2868C79.1486 17.7836 79.0076 18.3407 79.0076 18.9583C79.0076 19.5625 79.1486 20.1197 79.4306 20.6299C79.7259 21.1266 80.1153 21.5227 80.5986 21.8181C81.0954 22.1134 81.6458 22.2611 82.25 22.2611ZM97.616 25.3222C96.8507 25.3222 96.1458 25.188 95.5014 24.9194C94.8704 24.6509 94.3199 24.2817 93.85 23.8118V25H90.8292V5.66667H94.3333V13.6819C94.7764 13.3329 95.2731 13.0644 95.8236 12.8764C96.3741 12.6884 96.9715 12.5944 97.616 12.5944C98.7438 12.5944 99.7641 12.8831 100.677 13.4604C101.59 14.0243 102.315 14.7896 102.852 15.7563C103.403 16.7229 103.678 17.7903 103.678 18.9583C103.678 20.1264 103.403 21.1937 102.852 22.1604C102.315 23.1137 101.59 23.8789 100.677 24.4562C99.7641 25.0336 98.7438 25.3222 97.616 25.3222ZM97.2132 22.241C97.8039 22.241 98.341 22.0933 98.8243 21.7979C99.3076 21.5025 99.6903 21.1065 99.9722 20.6097C100.268 20.113 100.415 19.5625 100.415 18.9583C100.415 18.3542 100.268 17.8037 99.9722 17.3069C99.6903 16.8102 99.3076 16.4141 98.8243 16.1187C98.341 15.8234 97.8039 15.6757 97.2132 15.6757C96.6225 15.6757 96.0854 15.8234 95.6021 16.1187C95.1188 16.4141 94.7294 16.8102 94.434 17.3069C94.1521 17.8037 94.0111 18.3542 94.0111 18.9583C94.0111 19.5625 94.1521 20.113 94.434 20.6097C94.7294 21.1065 95.1188 21.5025 95.6021 21.7979C96.0854 22.0933 96.6225 22.241 97.2132 22.241ZM111.163 25.3222C110.049 25.3222 109.035 25.0336 108.122 24.4562C107.209 23.8789 106.478 23.1137 105.927 22.1604C105.39 21.1937 105.121 20.1264 105.121 18.9583C105.121 17.7903 105.39 16.7229 105.927 15.7563C106.478 14.7896 107.209 14.0243 108.122 13.4604C109.035 12.8831 110.049 12.5944 111.163 12.5944C111.942 12.5944 112.653 12.7354 113.298 13.0174C113.942 13.2859 114.493 13.6618 114.949 14.1451V12.9167H117.97V25H114.949V23.7715C114.493 24.2549 113.942 24.6375 113.298 24.9194C112.653 25.188 111.942 25.3222 111.163 25.3222ZM111.586 22.241C112.177 22.241 112.714 22.0933 113.197 21.7979C113.681 21.5025 114.063 21.1065 114.345 20.6097C114.64 20.113 114.788 19.5625 114.788 18.9583C114.788 18.3542 114.64 17.8037 114.345 17.3069C114.063 16.8102 113.681 16.4141 113.197 16.1187C112.714 15.8234 112.177 15.6757 111.586 15.6757C110.995 15.6757 110.458 15.8234 109.975 16.1187C109.492 16.4141 109.102 16.8102 108.807 17.3069C108.525 17.8037 108.384 18.3542 108.384 18.9583C108.384 19.5625 108.525 20.113 108.807 20.6097C109.102 21.1065 109.492 21.5025 109.975 21.7979C110.458 22.0933 110.995 22.241 111.586 22.241ZM120.622 25V12.9167H123.764V14.991C124.18 14.2928 124.704 13.7558 125.335 13.3799C125.979 12.9905 126.731 12.7958 127.59 12.7958L128.355 15.8972C128.1 15.8167 127.812 15.7764 127.489 15.7764C126.483 15.7764 125.67 16.1053 125.053 16.7632C124.435 17.4076 124.126 18.334 124.126 19.5424V25H120.622ZM135.75 25.4028C134.394 25.4028 133.199 25.1208 132.165 24.5569C131.131 23.9931 130.326 23.2211 129.748 22.241C129.171 21.2475 128.882 20.113 128.882 18.8375C128.882 17.6157 129.164 16.535 129.728 15.5951C130.292 14.6419 131.051 13.89 132.004 13.3396C132.97 12.7891 134.038 12.5139 135.206 12.5139C136.401 12.5139 137.468 12.7891 138.408 13.3396C139.348 13.8766 140.086 14.615 140.623 15.5549C141.174 16.4947 141.449 17.562 141.449 18.7569V19.9854H134.078C133.742 19.9854 133.42 19.9653 133.111 19.925C132.803 19.8847 132.494 19.8377 132.185 19.784C132.346 20.5896 132.742 21.2475 133.373 21.7576C134.018 22.2544 134.837 22.5028 135.83 22.5028C136.595 22.5028 137.28 22.3484 137.884 22.0396C138.502 21.7308 139.005 21.3481 139.395 20.8917L140.16 24.0333C139.556 24.4898 138.871 24.8322 138.106 25.0604C137.354 25.2887 136.569 25.4028 135.75 25.4028ZM132.104 17.6694C132.776 17.5218 133.434 17.4479 134.078 17.4479H136.213C136.589 17.4479 136.944 17.4613 137.28 17.4882C137.616 17.515 137.931 17.562 138.227 17.6292C138.025 16.9042 137.656 16.3336 137.119 15.9174C136.595 15.5012 135.944 15.2931 135.166 15.2931C134.427 15.2931 133.783 15.5079 133.232 15.9375C132.695 16.3537 132.319 16.931 132.104 17.6694ZM143.392 25V12.9167H146.533V14.2458C146.963 13.6819 147.493 13.2523 148.124 12.9569C148.755 12.6616 149.433 12.5139 150.158 12.5139C151.018 12.5139 151.816 12.722 152.555 13.1382C153.307 13.541 153.911 14.1384 154.367 14.9306C154.837 15.7093 155.072 16.6558 155.072 17.7701V25H151.568V18.2333C151.568 17.562 151.367 16.9646 150.964 16.441C150.561 15.9174 149.984 15.6556 149.232 15.6556C148.628 15.6556 148.084 15.8637 147.601 16.2799C147.131 16.6826 146.896 17.3204 146.896 18.1931V25H143.392ZM162.772 31.4444C161.832 31.4444 160.932 31.3035 160.073 31.0215C159.227 30.753 158.495 30.3838 157.878 29.9139L158.724 26.45C159.153 27.0273 159.717 27.4972 160.415 27.8597C161.113 28.2356 161.899 28.4236 162.772 28.4236C164.007 28.4236 164.967 28.0678 165.651 27.3563C166.336 26.6581 166.679 25.7586 166.679 24.6576V23.8118C166.222 24.2817 165.672 24.6509 165.027 24.9194C164.396 25.188 163.698 25.3222 162.933 25.3222C161.818 25.3222 160.805 25.0336 159.892 24.4562C158.979 23.8789 158.247 23.1137 157.697 22.1604C157.16 21.1937 156.891 20.1264 156.891 18.9583C156.891 17.7903 157.16 16.7229 157.697 15.7563C158.247 14.7896 158.979 14.0243 159.892 13.4604C160.805 12.8831 161.818 12.5944 162.933 12.5944C163.711 12.5944 164.423 12.7354 165.067 13.0174C165.712 13.2859 166.262 13.6618 166.719 14.1451V12.9167H169.74V25.1611C169.74 26.4769 169.417 27.6046 168.773 28.5444C168.129 29.4843 167.276 30.2025 166.215 30.6993C165.155 31.1961 164.007 31.4444 162.772 31.4444ZM163.356 22.241C163.946 22.241 164.483 22.0933 164.967 21.7979C165.45 21.5025 165.833 21.1065 166.115 20.6097C166.41 20.113 166.558 19.5625 166.558 18.9583C166.558 18.3542 166.41 17.8037 166.115 17.3069C165.833 16.8102 165.45 16.4141 164.967 16.1187C164.483 15.8234 163.946 15.6757 163.356 15.6757C162.765 15.6757 162.228 15.8234 161.744 16.1187C161.261 16.4141 160.872 16.8102 160.576 17.3069C160.294 17.8037 160.154 18.3542 160.154 18.9583C160.154 19.5625 160.294 20.113 160.576 20.6097C160.872 21.1065 161.261 21.5025 161.744 21.7979C162.228 22.0933 162.765 22.241 163.356 22.241ZM177.829 25.3222C176.715 25.3222 175.701 25.0336 174.788 24.4562C173.875 23.8789 173.144 23.1137 172.593 22.1604C172.056 21.1937 171.788 20.1264 171.788 18.9583C171.788 17.7903 172.056 16.7229 172.593 15.7563C173.144 14.7896 173.875 14.0243 174.788 13.4604C175.701 12.8831 176.715 12.5944 177.829 12.5944C178.608 12.5944 179.319 12.7354 179.964 13.0174C180.608 13.2859 181.159 13.6618 181.615 14.1451V12.9167H184.636V25H181.615V23.7715C181.159 24.2549 180.608 24.6375 179.964 24.9194C179.319 25.188 178.608 25.3222 177.829 25.3222ZM178.252 22.241C178.843 22.241 179.38 22.0933 179.863 21.7979C180.347 21.5025 180.729 21.1065 181.011 20.6097C181.306 20.113 181.454 19.5625 181.454 18.9583C181.454 18.3542 181.306 17.8037 181.011 17.3069C180.729 16.8102 180.347 16.4141 179.863 16.1187C179.38 15.8234 178.843 15.6757 178.252 15.6757C177.661 15.6757 177.124 15.8234 176.641 16.1187C176.158 16.4141 175.768 16.8102 175.473 17.3069C175.191 17.8037 175.05 18.3542 175.05 18.9583C175.05 19.5625 175.191 20.113 175.473 20.6097C175.768 21.1065 176.158 21.5025 176.641 21.7979C177.124 22.0933 177.661 22.241 178.252 22.241ZM187.328 25V12.9167H190.833V25H187.328ZM189.081 11.1646C188.557 11.1646 188.114 10.9833 187.751 10.6208C187.389 10.2583 187.208 9.81528 187.208 9.29167C187.208 8.75463 187.389 8.31157 187.751 7.9625C188.114 7.6 188.557 7.41875 189.081 7.41875C189.618 7.41875 190.061 7.6 190.41 7.9625C190.772 8.31157 190.953 8.75463 190.953 9.29167C190.953 9.81528 190.772 10.2583 190.41 10.6208C190.061 10.9833 189.618 11.1646 189.081 11.1646ZM198.976 25.3222C197.848 25.3222 196.828 25.0336 195.915 24.4562C195.002 23.8789 194.27 23.1137 193.72 22.1604C193.183 21.1937 192.914 20.1264 192.914 18.9583C192.914 17.7903 193.183 16.7229 193.72 15.7563C194.27 14.7896 195.002 14.0243 195.915 13.4604C196.828 12.8831 197.848 12.5944 198.976 12.5944C199.621 12.5944 200.218 12.6884 200.769 12.8764C201.319 13.0644 201.816 13.3329 202.259 13.6819V5.66667H205.763V25H202.742V23.8118C202.286 24.2817 201.735 24.6509 201.091 24.9194C200.446 25.188 199.742 25.3222 198.976 25.3222ZM199.379 22.241C199.97 22.241 200.507 22.0933 200.99 21.7979C201.473 21.5025 201.856 21.1065 202.138 20.6097C202.433 20.113 202.581 19.5625 202.581 18.9583C202.581 18.3542 202.433 17.8037 202.138 17.3069C201.856 16.8102 201.473 16.4141 200.99 16.1187C200.507 15.8234 199.97 15.6757 199.379 15.6757C198.788 15.6757 198.251 15.8234 197.768 16.1187C197.285 16.4141 196.895 16.8102 196.6 17.3069C196.318 17.8037 196.177 18.3542 196.177 18.9583C196.177 19.5625 196.318 20.113 196.6 20.6097C196.895 21.1065 197.285 21.5025 197.768 21.7979C198.251 22.0933 198.788 22.241 199.379 22.241ZM208.455 25V12.9167H211.96V25H208.455ZM210.207 11.1646C209.684 11.1646 209.241 10.9833 208.878 10.6208C208.516 10.2583 208.335 9.81528 208.335 9.29167C208.335 8.75463 208.516 8.31157 208.878 7.9625C209.241 7.6 209.684 7.41875 210.207 7.41875C210.745 7.41875 211.188 7.6 211.537 7.9625C211.899 8.31157 212.08 8.75463 212.08 9.29167C212.08 9.81528 211.899 10.2583 211.537 10.6208C211.188 10.9833 210.745 11.1646 210.207 11.1646ZM214.686 25V5.66667H218.19V25H214.686Z" className="fill-gray-900 dark:fill-white" fill="currentColor"/>
                  <path d="M37.8258 16.1269L34.4485 13.1195L35.6064 11.0851L39.5627 14.6232L37.8258 16.1269Z" className="fill-gray-900 dark:fill-white" fill="currentColor"/>
                  <path d="M38.1153 17.3653L34.2555 20.815L35.3169 22.8494L40.2382 18.3383L38.1153 17.3653Z" className="fill-gray-900 dark:fill-white" fill="currentColor"/>
                  <rect x="31.0713" y="9.13916" width="4.63174" height="4.24576" rx="2" className="fill-gray-900 dark:fill-white" fill="currentColor"/>
                  <rect x="37.6329" y="14.4463" width="4.63174" height="4.24576" rx="2" className="fill-gray-900 dark:fill-white" fill="currentColor"/>
                  <rect x="31.0713" y="20.4612" width="4.63174" height="4.24576" rx="2" className="fill-gray-900 dark:fill-white" fill="currentColor"/>
                  <path d="M11.1031 9.31598L0 15.2906V18.9932L11.1031 24.7069V21.4341L3.24969 17.1419L11.1031 12.7657V9.31598Z" className="fill-gray-900 dark:fill-white" fill="currentColor"/>
                  <path d="M24.9112 13.2846L21.6211 11.9353C18.749 17.7668 17.3079 21.3396 15.1603 27.6885C14.9456 28.4517 16.0722 28.8055 16.5087 28.856C17.0516 28.8816 17.3153 28.7102 17.387 28.5848C20.4683 22.8308 22.1401 19.5183 24.9112 13.2846Z" className="fill-gray-900 dark:fill-white" fill="currentColor"/>
                  <path d="M25.3373 12.408L22.0253 11.0609L22.7326 9.50745L26.0446 10.8546L25.3373 12.408Z" className="fill-gray-900 dark:fill-white" fill="currentColor"/>
                  <path d="M26.0272 9.83568L23.59 8.86716C23.617 7.00891 23.3599 6.01338 23.2281 5.7479L27.8956 2.41663L28.5236 7.82946C27.3963 8.04161 26.4214 9.29566 26.0272 9.83568Z" className="fill-gray-900 dark:fill-white" fill="currentColor"/>
                  <ellipse cx="0.803395" cy="0.738867" rx="0.803395" ry="0.738867" transform="matrix(0.995281 -0.0970362 0.115255 0.993336 25.2485 5.73651)" className="fill-gray-900 dark:fill-white" fill="currentColor"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_302_51">
                  <rect width="219" height="32" fill="currentColor"/>
                  </clipPath>
                  </defs>
                </svg>




              </a>
            </div>
            {/* End Logo */}

            <div className="md:hidden">
              {/* Toogle Button */}
              <button type="button" className="hs-collapse-toggle flex justify-center items-center size-6 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" id="hs-navbar-header-floating-collapse" aria-expanded="false" aria-controls="hs-navbar-header-floating" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-header-floating">
                <svg className="hs-collapse-open:hidden shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
              {/* End Toogle Button */}
            </div>
          </div>

          <div id="hs-navbar-header-floating" className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow md:block" aria-labelledby="hs-navbar-header-floating-collapse">
            <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-3 mt-3 md:mt-0 py-2 md:py-0 md:ps-7">
              <a className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-gray-800 font-medium text-gray-800 focus:outline-none dark:border-neutral-200 dark:text-neutral-200" href="#" aria-current="page">Home</a>
              <a className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Projects</a>
              <a className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Work</a>
              <a className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Articles</a>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}