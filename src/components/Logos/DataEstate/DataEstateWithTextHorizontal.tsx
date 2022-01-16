import styled from '@emotion/styled';
import { BaseLogoProps, LogoStyleProps } from '../types';

const LogoSvg = styled.svg`
  width: ${({ cssWidth }: LogoStyleProps) => cssWidth};
  height: ${({ cssHeight }: LogoStyleProps) => cssHeight};
`;

const DataEstateTextWithTextHorizontal = ({
  variant,
  className,
  width = '546',
  height = '52',
  title = 'Data Estate',
}: BaseLogoProps) => {
  const fillColor = variant === 'color' ? '#0061A1' : 'white';

  return (
    <LogoSvg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 546 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M171.04 50.4399C171.04 55.432 169.972 59.8599 167.836 63.7239C165.7 67.588 162.628 70.5999 158.62 72.7599C154.612 74.92 149.896 75.9999 144.472 75.9999H125.248V25.0959H144.472C149.944 25.0959 154.672 26.1519 158.656 28.2639C162.64 30.376 165.7 33.3519 167.836 37.1919C169.972 41.032 171.04 45.4479 171.04 50.4399ZM143.392 64.9839C148.192 64.9839 151.924 63.712 154.588 61.1679C157.252 58.6239 158.584 55.048 158.584 50.4399C158.584 45.8319 157.252 42.256 154.588 39.7119C151.924 37.1679 148.192 35.8959 143.392 35.8959H137.56V64.9839H143.392ZM193.288 35.3199C196.36 35.3199 199 36.0159 201.208 37.4079C203.416 38.8 205.048 40.6959 206.104 43.0959V35.8239H218.344V75.9999H206.104V68.7279C205.048 71.128 203.416 73.0239 201.208 74.4159C199 75.808 196.36 76.5039 193.288 76.5039C189.976 76.5039 187.012 75.676 184.396 74.0199C181.78 72.3639 179.716 69.976 178.204 66.8559C176.692 63.7359 175.936 60.088 175.936 55.9119C175.936 51.6879 176.692 48.028 178.204 44.9319C179.716 41.8359 181.78 39.46 184.396 37.8039C187.012 36.1479 189.976 35.3199 193.288 35.3199ZM197.248 46.1199C194.608 46.1199 192.484 46.9839 190.876 48.7119C189.268 50.44 188.464 52.8399 188.464 55.9119C188.464 58.984 189.268 61.3839 190.876 63.1119C192.484 64.84 194.608 65.7039 197.248 65.7039C199.84 65.7039 201.964 64.816 203.62 63.0399C205.276 61.2639 206.104 58.888 206.104 55.9119C206.104 52.8879 205.276 50.5 203.62 48.7479C201.964 46.9959 199.84 46.1199 197.248 46.1199ZM249.592 65.4159V75.9999H244.048C239.344 75.9999 235.684 74.836 233.068 72.5079C230.452 70.1799 229.144 66.328 229.144 60.9519V46.1919H223.744V35.8239H229.144V25.9599H241.456V35.8239H249.52V46.1919H241.456V61.1679C241.456 62.752 241.78 63.8559 242.428 64.4799C243.076 65.104 244.168 65.4159 245.704 65.4159H249.592ZM271.768 35.3199C274.84 35.3199 277.48 36.0159 279.688 37.4079C281.896 38.8 283.528 40.6959 284.584 43.0959V35.8239H296.824V75.9999H284.584V68.7279C283.528 71.128 281.896 73.0239 279.688 74.4159C277.48 75.808 274.84 76.5039 271.768 76.5039C268.456 76.5039 265.492 75.676 262.876 74.0199C260.26 72.3639 258.196 69.976 256.684 66.8559C255.172 63.7359 254.416 60.088 254.416 55.9119C254.416 51.6879 255.172 48.028 256.684 44.9319C258.196 41.8359 260.26 39.46 262.876 37.8039C265.492 36.1479 268.456 35.3199 271.768 35.3199ZM275.728 46.1199C273.088 46.1199 270.964 46.9839 269.356 48.7119C267.748 50.44 266.944 52.8399 266.944 55.9119C266.944 58.984 267.748 61.3839 269.356 63.1119C270.964 64.84 273.088 65.7039 275.728 65.7039C278.32 65.7039 280.444 64.816 282.1 63.0399C283.756 61.2639 284.584 58.888 284.584 55.9119C284.584 52.8879 283.756 50.5 282.1 48.7479C280.444 46.9959 278.32 46.1199 275.728 46.1199ZM332.032 34.8879V45.5439H349.24V54.8319H332.032V66.1359H351.4V75.9999H319.72V25.0959H351.4V34.8879H332.032ZM373 35.3199C378.088 35.3199 382.156 36.5919 385.204 39.1359C388.252 41.68 390.16 45.0399 390.928 49.2159H379.408C379.072 47.5839 378.316 46.3 377.14 45.3639C375.964 44.4279 374.488 43.9599 372.712 43.9599C371.32 43.9599 370.264 44.2599 369.544 44.8599C368.824 45.46 368.464 46.3119 368.464 47.4159C368.464 48.664 369.124 49.5999 370.444 50.2239C371.764 50.848 373.84 51.4719 376.672 52.0959C379.744 52.8159 382.264 53.5479 384.232 54.2919C386.2 55.036 387.904 56.2479 389.344 57.9279C390.784 59.608 391.504 61.8639 391.504 64.6959C391.504 67 390.88 69.0399 389.632 70.8159C388.384 72.592 386.584 73.9839 384.232 74.9919C381.88 76 379.096 76.5039 375.88 76.5039C370.456 76.5039 366.112 75.304 362.848 72.9039C359.584 70.5039 357.592 67.072 356.872 62.6079H368.752C368.944 64.336 369.676 65.6559 370.948 66.5679C372.22 67.48 373.864 67.9359 375.88 67.9359C377.272 67.9359 378.328 67.612 379.048 66.9639C379.768 66.3159 380.128 65.464 380.128 64.4079C380.128 63.0159 379.468 62.0199 378.148 61.4199C376.828 60.8199 374.68 60.1839 371.704 59.5119C368.728 58.8879 366.28 58.216 364.36 57.4959C362.44 56.7759 360.784 55.612 359.392 54.0039C358 52.3959 357.304 50.2 357.304 47.4159C357.304 43.8159 358.672 40.9 361.408 38.6679C364.144 36.4359 368.008 35.3199 373 35.3199ZM421.096 65.4159V75.9999H415.552C410.848 75.9999 407.188 74.836 404.572 72.5079C401.956 70.1799 400.648 66.328 400.648 60.9519V46.1919H395.248V35.8239H400.648V25.9599H412.96V35.8239H421.024V46.1919H412.96V61.1679C412.96 62.752 413.284 63.8559 413.932 64.4799C414.58 65.104 415.672 65.4159 417.208 65.4159H421.096ZM443.272 35.3199C446.344 35.3199 448.984 36.0159 451.192 37.4079C453.4 38.8 455.032 40.6959 456.088 43.0959V35.8239H468.328V75.9999H456.088V68.7279C455.032 71.128 453.4 73.0239 451.192 74.4159C448.984 75.808 446.344 76.5039 443.272 76.5039C439.96 76.5039 436.996 75.676 434.38 74.0199C431.764 72.3639 429.7 69.976 428.188 66.8559C426.676 63.7359 425.92 60.088 425.92 55.9119C425.92 51.6879 426.676 48.028 428.188 44.9319C429.7 41.8359 431.764 39.46 434.38 37.8039C436.996 36.1479 439.96 35.3199 443.272 35.3199ZM447.232 46.1199C444.592 46.1199 442.468 46.9839 440.86 48.7119C439.252 50.44 438.448 52.8399 438.448 55.9119C438.448 58.984 439.252 61.3839 440.86 63.1119C442.468 64.84 444.592 65.7039 447.232 65.7039C449.824 65.7039 451.948 64.816 453.604 63.0399C455.26 61.2639 456.088 58.888 456.088 55.9119C456.088 52.8879 455.26 50.5 453.604 48.7479C451.948 46.9959 449.824 46.1199 447.232 46.1199ZM499.576 65.4159V75.9999H494.032C489.328 75.9999 485.668 74.836 483.052 72.5079C480.436 70.1799 479.128 66.328 479.128 60.9519V46.1919H473.728V35.8239H479.128V25.9599H491.44V35.8239H499.504V46.1919H491.44V61.1679C491.44 62.752 491.764 63.8559 492.412 64.4799C493.06 65.104 494.152 65.4159 495.688 65.4159H499.576ZM544.648 54.8319C544.648 55.84 544.528 56.9439 544.288 58.1439H516.424C516.568 61.168 517.336 63.3399 518.728 64.6599C520.12 65.98 521.896 66.6399 524.056 66.6399C525.88 66.6399 527.392 66.184 528.592 65.2719C529.792 64.3599 530.584 63.184 530.968 61.7439H544C543.472 64.576 542.32 67.1079 540.544 69.3399C538.768 71.572 536.512 73.3239 533.776 74.5959C531.04 75.868 527.992 76.5039 524.632 76.5039C520.696 76.5039 517.204 75.676 514.156 74.0199C511.108 72.3639 508.72 69.976 506.992 66.8559C505.264 63.7359 504.4 60.088 504.4 55.9119C504.4 51.6879 505.252 48.028 506.956 44.9319C508.66 41.8359 511.048 39.46 514.12 37.8039C517.192 36.1479 520.696 35.3199 524.632 35.3199C528.616 35.3199 532.12 36.1359 535.144 37.7679C538.168 39.4 540.508 41.6919 542.164 44.6439C543.82 47.596 544.648 50.9919 544.648 54.8319ZM532.192 52.9599C532.24 50.3199 531.532 48.34 530.068 47.0199C528.604 45.6999 526.792 45.0399 524.632 45.0399C522.376 45.0399 520.504 45.7119 519.016 47.0559C517.528 48.4 516.688 50.3679 516.496 52.9599H532.192Z"
        fill={fillColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.541748 13.8166C0.541748 13.8166 26.0001 8.66675 51.4584 8.66675C76.9167 8.66675 102.375 13.8166 102.375 13.8166V32.8052C102.361 33.4582 102.358 34.2196 102.355 35.0761C102.326 44.2496 102.263 64.3404 86.8835 79.1359C74.6236 90.9306 57.891 98.0417 51.4584 98.0417C45.0258 98.0417 28.2932 90.9306 16.0334 79.1359C0.651897 64.3384 0.589626 44.245 0.561201 35.0727C0.558551 34.2175 0.556195 33.4573 0.541748 32.8052V13.8166ZM72.9629 72.0572L89.3751 63.5077V23.365C89.3751 23.365 69.661 20.5834 51.9977 20.5834C34.3343 20.5834 14.0834 23.365 14.0834 23.365V59.3054L30.4965 72.0532V61.5649L26.2955 58.727V36.189H45.6274V69.3213L39.8971 65.9353V76.4266L51.732 83.4167L63.565 76.4256V65.9353L57.8367 69.3213V36.189H77.1611V58.729L72.9629 61.5669V72.0572Z"
        fill={fillColor}
      />
    </LogoSvg>
  );
};

export default DataEstateTextWithTextHorizontal;
