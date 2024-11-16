"use client";
import Image from "next/image";

import { useForm } from "@formspree/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [state, handleSubmit] = useForm("xldenqwj");

  return (
    <section id="Contact" className="pt-60">
      <h1 className=" text-center  text-4xl font-semibold ">Get In Touch</h1>
      <div className="res flex items-center justify-between ">
        <div>
          <h2 className="text-3xl mt-10 ">Lets Talk</h2>
          <p className="w-2/3 text-gray-500 text-lg leading-9 py-3">
            If you have a problem using the application or you have a suggestion
            to improve it, do not hesitate to talk to us, our team works
            throughout the day
          </p>
          <div className="links flex gap-4">
            <a href="https://www.facebook.com/adumcar">
              {" "}
              <Image
                src="data:image/png;base64,
            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"
                width={40}
                height={40}
                alt=""
                className="rounded-full"
              />
            </a>
            <a href="https://www.instagram.com/adumcar/">
              {" "}
              <Image
                className="rounded-xl"
                src="data:image/jpeg;base64,
          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"
                width={40}
                height={40}
                alt=""
              />
            </a>
            <a href="https://api.whatsapp.com/send?phone=972526999069">
              {" "}
              <Image
                className="rounded-lg"
                src="data:image/j
          peg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTEhIVFhUVFxgWFRgVFhUXFxcXFxcXFhcVFRUYHSggGBolHRgXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGjcmICYtKy0tLS0tLS0tLy0vLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLf/AABEIALUBFwMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQYEBQcDAv/EAEQQAAEDAQQGBwUGAwgCAwAAAAEAAhEhAxIxQQQFUWFxgQYTIjKRocEjM0JSsUNicpLR4aLC8QcVU2OCstLwFnMUs8P/xAAaAQEAAwEBAQAAAAAAAAAAAAAABAUGAwIB/8QANhEAAgECAgYIBgICAwEAAAAAAAECAwQRMQUSEyFRcTIzQVKBkbHRFCJhocHhQvAj8RU0QyT/2gAMAwEAAhEDEQA/AOzOd1lBSK1QAukdXnhOVK+iAB10XDifVAG+zxrOzd/VAQ1tw3jUHZvqgF2vWZYxnSiAOb1naFIpXxQEvd1mFIrVAYOm60Y1twVIgUwoo1W5jDct7K+40hTpblvZq7TWtoRAMDcocruo8txVVNJ1pZbjwOlv+Yrm61R9pHd3Wf8AJnz17/mK87SfE8fEVe8x17vmKbSfEber3mOvd8xTaT4j4ir3mOvd8xTaT4j4ir3mR17vmKbSfEfEVe8yevd8xTaT4j4ir3mOvd8xTaT4j4ir3mOvd8xTaT4j4ir3mOvd8xTaT4j4ir3mOvd8xTaT4j4ir3mOvd8xTaT4j4ir3mOvd8xTaT4j4ir3mBpL/mKbWfE+/EVe8z0s9OtBg8+K9KvUXae43tdfyMjRdbPYcjx/X+q7wvJLpEylpWoumsTZaHrBjnXph1ezt/Cc/ruU6nVjPIuKF1TrL5X4GYW3jfGAy4LoSCX+0wpG3f8A0QBzr/ZFCNu6iAXqdXnhOW1AGu6vsms1p4eiAhg6uprOxAA26b+RrGdUAdZX+0KcdyAl5B93jnFKc0AJEQO/5znXxQAQBDu/lnwqgDKe85TXjhyQENBBl/dymvCiAVmfg8o4cUAdJ93hnFKoDT621iCSyzoMyM1X3Nx/GJRX9+8dnT8WahQSmCAIAgCAIAgCAIAgCAIAgCAIAgCAICCvsZOLxR6hOUHrRe822qNaOLxY2hrEtdhfA7wI+cCu8VyKtbevtFvzNNY3irxwfSWfubp9fd84pwx5qQTiXEGjO9nFONeKASIj4/OePBAGwPeY5TWiAhlPecpr9EAEzLu5lsjKiAODj3O7up5ICXANqypzzQAgAXh39nHGiAAAi87vZDDDCiAN7XfpGGXFAQ0l1HUaMMuFUAkzd+Db+6Aw9baT1bLrD3v+lR7mpqQ3dpB0hcbKluzZWyVUmXCAIAgCAIAgCAIAh8Er4MQvoCH0IAgCAIAgCAIDH06zJYbhh7e0w7HNqCvdObhJSOtCs6NRTXZ6dpadSayFtYWdrZirx2xjde2jm+Mq6TxWJsItNYo2DgG1bV2efGi+n0QIvfHs/ZAGgOq+hyypwQENN7v0jDJAASTdPdyPDCqAOeW0YJHCfNASW9XXGabEAux7TnHGmPNALt7t4Rlw3oB7zdHPH+iAi9f7GEZ44UQC9Hs+U8a4ICva7MWl2cFV3ksZ4cDOaVqa1bV4GvlRSrEoAgEofQh8CADYOSZn1Jt4I2miajtHVdDBvqfy/qpVO0nLPcWVHRdWe+Xyr7+RtbDUNkMZdxMeQhSo2lNZ7yyp6LoRz38/0ZlnoNkMLNn5R9V2VKCySJcbajHKC8kevUt+UeAXrVXA6akeB5P0GyONmw/6QvLpQeaR4lbUZZwXkjEttRWLsAWncfQyuUrSm8txEqaLoSyWHJ+5q9L1DaNqwh48HeBofFRZ2c10d5W1tFVYb4PW+zNU4EGCCCMQaEcQojTTwZWyi4vBrBkIeQgEoAgEoAgHQPTertdKsMQHi0bX5qH+VW9tLGmjVaPnrW8fLyLldudrGcsMaruTRd+05x5YoAG9Z2sIpt3+qAA9ZTCOaAi9e9nspPDcgHW3OzE+WKANbcq6oNNv1QANIN893GOOFEAIvG8KNGI4Y0QB/b7lIxyx4ICXG92W0I5YIBNLnxbfPFAVTWQItHA4gn6lU9w8ajMpfvG4kY0riQxKASgEoBKAy9X6A+1MNoBi44D9TuXWlRlUe7IlW1pO4fy5dr/vaWjQNXWdkOyJObjif0G4K0pUY01uNHb2lOgvlW/j2mW4gVNAupJbS3s1uk68sW4EvP3ajxNFGndU4/XkQKuk6ENyePL3yMC06SH4bMc3T5ALg719kSFLTD/jDzZ5f+R2vys8HfqvHxs+COf/AC9Xur7+56WfSR3xWYPBxH1C9q9fbE6R0xL+UPv+jP0fX1i7Elh+8KeI9V3hd05Z7iZS0pQnue7n7myY8ESCCDgRUKQmnvRYKSksUeGm6Cy1EPFciKEcCvFSlGovmOFe2p11hNePaVbWWrX2JrVpwcPodhVXWoSp8jOXdlO3eL3rj7mFK4kMSgEoBKASgMbonahus7cEUdZeY6tWdn1fiaTRL/weLL41t03nVBwzxqpZZiK3/h2eWCAOaX1bQCmz6ICXG/3aRjl9EALpFwd4UnhjVAG2gbRwk+P1QENn7TDKdvJAKzXueUZeiAGZ7Pcz9UAd/l848seaAl0fB3s/XFAKR9/znLdggKlrEnrHzjeM+JVNX6yXMyN718+bMaVxIwlAJQCUBn6p1cbZ2xg7x9Bv+ikUKLqP6E2ys3cS39FZv8FvsbJrGhrRAGACtoxUVgjUQhGEVGKwRg6z1syyp3n5NGW9xyXGtcRp7u0iXd9Chuzlw9ysabp9pantupkBRo5fqqypWlU6TM7Xuqtd/O93DsMaVyI4lAJQCUAlAe+iaa+zMscRtGR4hdKdWUHjFnajcVKLxg/byLPqvXDbXsnsv2ZH8J9FZUbmNTc9zNDaX8K/yvdLhx5GxtLMOBDgCDQgqQ0msGT5RUlg1uKlrnVhsnSKsOB2H5T6FVVxQ2bxWRmb6ydCWtHov7fT2NbKjFeJQCUAlAY3Rkt/vR97DqPVqs7LoPmaLRHUvn+EX5s/H3cvTDcphais/c8o+uKAOn7Pu5xt58kBLv8AL5x+6AGI7Pfz2zmgDbvx97f+yAhrr9HUitP3QC9JufDhOdK4oAXXTcGBz44oA/2fdrOM1w4cUBLm3e0Kk7d9UAu0v/FjGWzBAU/WTvav/EfqVS1+slzMjedfPmzGlciMJQCUB7aJo7rR4Y3E+QzJXunBzkoo60aMqs1CPaXjRNGbZsDG4Dz2k71cwgoR1Ua6jSjSgoRyRr9ea26oXW98j8o2nfsC4XFfZrBZkK/vdgtWPSf2+vsVJzySSSSTUk4niqptvezNNtvF5kSh8EoBKASgEoBKASgJBQZFp1DrfrPZvPbGB+YD1VpbXGv8ss/U0ej77a/459L1/Ztrexa9pa4SCIKkyipLBljUpxqRcZZMo+sNFNk8sOVQdoOB/wC7CqarTdOWqzJXNB0Kjg/DkY8rmcBKASgPDoxZh2tHz/gH6tVnZdB8zQ6I6l8/wX9rr5umgGzdTNTC2F6tz4cJz24oA51yjag1r4ZICXDq+7Wdv7IAWwL4xNYyrigDbIP7TjB3fugBd1lMIqgF6fZ8p4Vw5IAHXexjOfFAB7PfPLD+qAgNudvGcuNUAu/ac44UxQFP1m6bV52ud9SqWv1kuZkLzr582YsrkRhKASgLT0W0OGG1OL6N3NH6n6BWVnTwjrvtNFom31YOq83ly/fsbXWGliys3POWA2nIKVUqKEXJlhcVlRpub7CiW1sXuLnGS4ySqSUnJ4syFScqknKWbPloJIAqTQAZk4BfEsdyPKTbwRZtD6NtujrSS44hpgDdvVlTs44fPmaChomCj/l3v7GBr7VIsQ1zCbpoZrBxHI18N64XNuqeDjkQtIWMaCU4ZZGnlRCrEoBKASgEoBKA+mWhBBBggyDsIX1Np4o9Rk4tNZovGqtNFtZh2eDhscMf15q5o1NpDE1tpcKvSU+3t5mH0l0O/Z3x3rOv+n4v15Ljd09aGtwIulLfaUtdZx9O33KjKqzNCUAlAeHRmzva0cP8g/Vqs7LoPmaLRHUvn+DoRdf7OEZ8KKYWwvfZ8p88EADur7OM19PRAQB1dcZQANu+021jigBsr/amP2QEuId7uhzilEAJEXR39uc51QAEAQ7vZHHhVAQ3s+8rOE14+iANBBl9W5Z8KIBBm98GzKOCAputD7V8YXnfUqlr9ZLmZC86+fNmLK5EYSgPqxYXODRi4ho4kwvsVrNJHqEHOSiu14HQ7GzDWhowaABwFFexSSwRtIRUIqKyRV+lmly9tmMGiT+I4eA/3KuvamMlHgUGl6+tNUlkt75/69TRSoRUG66KaOHWpcfgFOLpAPgCplnDGblwLXRNJSqub7F93/WW5WZozG1lovW2bmbRTcRUHxXOrDXg4nC5oqtSlDj69hQDsOOapDHNNbmJQCUAlAJQCUAlAbnovpd21uHB4j/UKjykeCl2dTVnq8S00VX1Kuo8peqLc5oIg4HFWjWJo2k1gznumWPVvcz5SRyyPhCopx1ZOJja1PZ1JQ4M8pXk5CUB49GGk6zfdx6g5xm1Wdl0HzNFojqXz/B0NxBoyjs8uNVMLYSIu/HtznjwQBpDaPqcprTigIYLvvK7JqgABBk9zIZQcKIA5rjVlBuMeSAl4A93U5xWiAECJHf2ZznRAAARLu9llwogDK+8psmnH0QENJJh/dymnCqASZj4NuUceKApetffPjC86PEqlrdZLmY+86+fNmJK5EcSh8Np0asr2kM+6C7wEDzIUi1jjVRP0ZDWuI/TFl3Vuao53p1vftHv+ZxI4TTyhUdSWtNsxleptKsp8W/19jwleDkWLobaC9aNzIaRyLgfqFOsXvkuRdaGlvnHl+S0qxL4+XvABJMACSTgAM18bwWLPjaSxZz7WFuH2r3tEBziR+vPHmqSrJSm2jHXFSNSrKccm/755mPK8HESgEoBKASgEoD7sba45rh8JDvAyvsZarTPUJ6klJdjxOjtM1V8bVPEpvSqzu28/M1p51b6BVV5HCpjxRmtKw1bjHik/wAfg08qKVolAefRZxGs33cepOU/IrOy6HiaLRHUvn+DojgBVnezivGimFsIET8ezOeHBAGgGr6HKaU4ICGGfeU2TRAASTB7mWyMqoA5zhRnd3CfNAS5vV1FZpVAC2B1meMcaeqABt7t7MuCAN9pjSNm/wDogIDr/Ywj0ogF6vV5YTxqgKTrYRbWg2OI8yqSv1kuZj7zr582Yi5EYIDe9Dx7Zx2MPm5v6KZZdN8i20Ov80n9Pyi2W7oa47AT5Kzk8E2aGbwi2c1bgqAxCJQGZqnTeqtWvywd+E4+FDyXWjU2c1IlWdfYVlPsyfL+7zoDTNRgVdmvTx3o0vSxjzYy09kGXgZjI8AY/wChRLxSdPd4lZpWNR0Ply7eRTVVGZCAIAgCASgCAIDomrHTY2R2sYf4Qryk8YRf0Rs7Z40YP6L0K70zHbszta7yI/VQr7OJTaZXzw5P8FdUApQgPPona3dZvP8Akn+RWll0PE0miOpfM6MW3O1jPrVTC1F2nWZ4x5IA1vWdo0inr6oCGnrKGkbEADr3s9lJ4IAbW52RX90AY3q6urNKfugAbB6zLGM60QBzbxvjAeNEBL/ad2kbd/DggDnX+yKEbd1EAvU6vPCctqAo2tqWzxscfqVSV+slzMfedfPmzDlciMJQG/6Gu9s4bbM+Tm/qpll03yLbQ7/zNfT8ot1u2WuG0EeIVnJYpo0M1jFo5k0qgMQshKASgLT0U1t9g8/+s7vk/T9lY2lf+EvAvtF3mK2M/D29izOAIg1BxU8umsdzKPr/AFQbF15omzJoflPyn0KqLi3dN4rIy9/ZOhLWj0X9vp7GolRivEoCd+QxQ+4PDEiUPglAJQCUB0fVjYsbMbGMH8IV5SWEIr6I2dstWjBfRehXOmru3ZDY1x8SP0UG+ziU2mX88F9H+CtyoJSiUA6IWgbrN5P+Cf5FaWXQ8TSaI6l8zojW3DeNQdm+qmFqLtesyxjPYgDm3+0KAUr4oCXnrO7SNv7IAXSLgxFJyogDbUM7JqdyAhsj3mGU1ryQCsye55RlTHYgBmez3M/WiAOr7vnFOGPNAS6Pg72frigFIj4/Ocq4YICh63PtrScbxnxKpK3WS5sx1318+b9TDlciOJQG16MW93SWfelviJHmApFrLCqifo2ercx+uKL8rg1RzXWNj1draM+VxA4TLfIhUVWOrNoxlxT2dWUODf6+xjSvBxEoCQ7MGCKiMQciEPqeDxRd+j2vBbC48gWg/jG0b9o58La3uNotV5+pprC+Vdak+l6/3tNzaMDgQ4Ag0INQRvCktJrBljKKksGtxVta9FzV1gZHyE1H4XH6HxVfVs+2HkUV1ol9Kj5ez9/M0Vjq61daCyuODj8wIgfMd29RI0ZuWrhvKyFrVlU2erg/r68i+6u0BljZizbUfET8ROJKuKdNQjqo1Vvbwo01CP8As1+sejVlaVZ7N33R2TxblyhcKlpCW9bmQ7jRdKpvh8r+mXl7YFU1nqy0sCA8CDg4GQY8weKr6tGVN/MUVzaVLd4T8zClciMemj2Re9rB8Tg3xML1GOs0uJ7pw15qC7WkdOAhXxtluKP0utp0gj5Gtbzq7+YKpvJY1MOBmNKz1rjDgkvz+TSyopWiUB9dDy3+833sOpP8itLLoeJpNEdS+Z0Vs/H3cvTDcphaisz8HlHDHFAHSfd93OKV58kBLq+75xT6oAYiG9/PbOdUAaW/H3t9fogIaS+j6AcvqgAJJuHu7eGFUAJg3W1acTxxqgJd2O5Wcc8MMEAcLvabUnHPHGiARS/8WzywQFB1w721p+I/UqkrdZLmzHXfXz5v1MOVyI4lAfdjalrmuGLSHDiDI+i+p4NNH2E3CSks08fI6do9sHta9uDgCOBEq+jJSSaNtCanFSWT3lS6aaHde21GDxdd+IYeI/2quvaeElPiUGmKGrNVV27nz/16FblQSnEoBKAlryCCCQRUEUIO0FE8Mgm08UW3UnScGGW5g5PwafxfKd+HBWVC7T3T8y/s9KKXyVtz49njw9ORZgZqFOLrHElAEAQFT6caQJs2ZiXHyA/m8FX30solFpmosYQ5v2/JVpVeUZv+h2h37U2hwsxT8ThA8BPkplnTxnrcC10TQ16u0eUfV/r8F0e8AEkwAJJ2AKzbwWLNG2ksWcy0zSTaWj3n4nE8AcByEBUU5a0nLiYurUdSpKb7WeMrycxKA++hrAdZvn/BP8itLLoeJo9EdS+Z0Zpvdl1AMMvNTC2E1ufDt/dAHEto2oOOaAlwudys45/RACABeHe2ccaIA1gdV1D4ICL3WUwiu1AL0+z5TwrhyQC9d7GM54Y7kA93vnlh/VALtzt4zlhjXFALs+05xwpigKBrl029odrnfUqjrdZLmzHXfXz5v1MOVzIwlAJQFy6F6wvMNiTVlW72k18Cf4grKyq4x1H2Gi0Rca0HSeay5fp+qN5rHQ221m6zd8QodhxBHAqXUpqcXFllcUY1qbhLtOZWggkGKEimFKUVG1g8DGyWq2n2ESvh5EoBKASgM7V2uLaxox/Z+V1W+GXKF1p150+iyVQvK1DoPdweX95Fi0Lpgw0tWFp2t7Q5jEeamwvovpLAt6OmIPdUjhy3r39TZt6Q6KRPWjmHA+BC7/E0u8TFpG2ax1/U12seltm0RYgvdtILWjkany4rjUvYrobyJcaXpxWFJYvyXv8A3MqOk6Q60cXvMuOJP/aBVspOTxZQVKkqknKTxbPmxs3OcGtEucYA2kok5PBHyEXOSjFb2dI1RoAsLJrBU4uO1xxPpwAV1RpqnDVNha26oUlBePM1nTHWFyy6sHtWlDuYMfHDmVwvKurDVWb9CFpW41KWzWcvTt9ikSqszQlAJQHp0Ns72snjD2J/kVpZdDxNJojqXzOkXr/ZwjPHCmCmFsRe+z5T54IBe6vs4zXZu9EAjq64zyQC7d9ptrHHegHVX+1MbscEBLiHUZQ55IASCLo723hjVAAYF13eOBxxwqgDex36zhnxxQENBb2nVacM+FEAgze+HZ+yA5/rp3t7T8bv9xVHW6yXNmNu+vnzfqYMrkRxKASgLb0E0b3lodzB/ud9W+CsbGOcvAvdC0+nU8Py/wAFi1rpPV2No/NrTHHBvnCmVZ6kHItrmrsqUp8F/o5gFRGMEoBKASgEoBKASgEoBKAloJIABJNABUk7AF9SxyPqTbwReujOoupHWWg9oRhjcGwb9p5cbW2t9mtaWfoaXR1jsVrz6T+374/3Hc6ZpTbJjnvMNaJPoBtJwUmc1BazLCrVjSg5yyRzXWWnOtrR1o7PAbGjBv8A3MlUlWo6knJmPuK8q1Rzl/VwMWVzOIlAJQHt0NaTrJ8f4J/kVrZdDxNJojqXzOkuN6jaEY5caqYWwml34tv7oA0htH1JwzQENFzv1nDP6oAAQbx7uzjhRAHMLqtoPBAS6B7vHOK05oAYiR3/ADnOmG1ABES7v5elEBDa+85TTjhyQBs/H3csuFQgFZgdzyjOuOKA57ruOvtIwvuj8xVHW6yXNmNu+vnzfqYMrkRxKASgOj9GNGuaNZjNwvn/AFVHlA5K6to6tJeZrdHU9nbxXHf5mv6daVdsWsnvuk/hZX/ddXG+nhBR4kTTNXVpKHF/ZfvAqWi6vtrT3dk928CB+Y081XxpTl0UUdO2q1OhFv088jcaL0Qt3d9zGD8zvAU81IjZTebwJ9PRFaXSaX3ft9zWaz1RbWB7bezk9tW+OXOFxq0J0814kO4s6tB/Ot3FZfrxMCVxIwlAJQCUAlAZurdV2tuYs20zcaMHF2fASV1p0Z1OiiRb2tWu/kW7j2efsXfUmoLPR+137TNxy3NGX1VpRto09+bNHZ2FO335y4+3A2lvbNY0ueQ1oEknALvKSisWTZzjCLlJ4JHPukOuzpDoEizaeyMyfmdv3ZKouK7qPdkZW+vXcSwXRWXuzUSoxBEoBKASgPboYXf3k+7j1J/kVrZdDxNJojqfE6W6B3O9nFeNDvUwthSJ+PznhhggDYPvMcppTlzQENr7zlNPogAmYd3MtkZVQBxcO53d1fqgJe3q6is0qgBbA6zPGMq0QANvC+cRllRAGe0xpGzf/RAQ1183TQDZuogF6vV5YTntQHPNetjSLQfed9SqSv1kuZjr3/sT5swJXEiiUB66JYG0eyzHxuDeEmCeQqvUI60lHidKdPaTUF2tI6w1oAgYDBX5tksFgjztNHY5wc5jS4YEgEicYJwXlxi3i0eXThJqTW9HqvR7IJQAhAajTejOjWlblw7bM3f4e75KPO1py7MORAq6Mt6m/Vwf03fbL7GptuhPyW/5mT5gj6KO7DhIgz0L3Z+a/wBGP/4Xa/4rPBy8fAy4nP8A4Wp315HvY9Cfnt+TWepPovSsOMj3DQven5L9m10Povo1nUtLzttDI/KIb5KRC0px7MeZOpaLt6e9rHn7ZfY3LWgCAIG5SSelhuRga11zY6OO26XZMbVx5ZDeaLjVrwp5ka5vKVuvne/h2/3mUPXOurTSHdrssHdYMBvJ+I7/AKKrrV5VXvy4Gaur2pcP5ty7F/c2a2VwIYlAJQCUAlAe/Qe1I1lakZWRH/1/qraz6vxNPolf/P4s6Y5tztCpO3fVSy0F2nWZ4xlsQBrb/aNIpTxQEMPWUNI2IAHSbhwFJzogDrUs7IqN6ANb1dTWaUQC7B6zLGM609UALb3b2ZcEAd7TCkbd/wDRASXX+yKR6UQC9Tq88JyrVAc76Q2d3SLQbHHz7Xqqa6WFVmS0lHVuZef2NdKjkESgN90L0e9pF84WbS6ThJ7I8i7wUuzjjUx4FnoqnrV9Z5RWP49y26X0i0Wzxtmk7Gds8OzMc1Plc0o5su6mkLannPHlv9DTaX03b9lZE73kN8hM+Sjyvl/FECppqP8A5w893piabSulOlP+MMGxjQPMyfNRpXdWXbhyIFTSdzP+WHJe+LNTa27nG85znOFQXOJI4Emi4OTbxbIMpyk9aTbfM3OrulekWdHEWrdj+9yePUFSKd3UjnvLChpSvT3P5l9c/P3xLDonTLR3d8PszvF4ci2T5KXG9pvPcWlPTFCXSTX39PY2dlrzRnYW9nzcGnwdC7qvTf8AJEuN9bv/ANF54ep7/wDz7H/Fs/zt/VetpDiddtT7y80eFrrvRm429lwD2k+AMry69NfyRyle28c6i80a7SumGjt7l+0O5t0eLo9Vxle01lvItTS9CPRxfhh64Ff1h0tt7SQyLJv3au/MfQBRKl5OWW4q6+la1TdH5V9M/P8ARoXOJJJJJOJJkneScVFbxK1tt4siV8PglAJQCUAlAJQGX/Zq+dM0i0xAaW/xNb/IVc20cKaNbo6Grbx8zpIbc7RrPrVSCcLtesyxjPYgDm9Z2hSKV8fVAS49ZQUjagBdeHV5ik8EAba3OyRP7oCGgj3mGU1qgABmT3PKMqIAQSZb3c8uNEAfX3dNsU4eqAlxBozvZxTjVAJER8fnPHggKN000cstmud9o3j2mUPkR4FV99Tyn4FFpmg/lqrk/wAfk0MquKESgBOSASgEoBKASgEoBKASgIQEygEoBKASgEoBKASgEoBKAx9YaV1dm52YoBtcaNHivcIOckkdaNJ1aigu0tf9lmrxZaM61tBW1d2SRMtZIJ5uLlexWCwNpCKikl2FzaCDL+7lNeFF9PQgzPweUcOKAOBNWYZxSvBAS6D7um2KIASIgd/PbOdUAa5oo/vbxPmgIaS73lBlNKoBJm6e5tyjKqAEkGG93M48aoA7s+7rOMV4eqAlwAq2rs8+NEAgRe+PZnPBAa3X2qxpVg5jjdtB2rMmkOGBjYZIO4leZRUlgzxUpxqRcZZM5pZ2jpLHtLbRhh7TQg/oqWtSdOWDMhdWsqE9V5djPRciMEAQBAEAQBAEAQBAEAQBAEAQBAEAQBzoqaAIEsTW6v0R+n6Q2zs6Wba3t2BtPRozlWtrQ1FrPM0ujbPZLaSzZ2XQtGY1jbOLrWANYMKARzwCmFserSTR9G5ZcKoBJm78G3LxQBxLaMqM4rXigJd2fd12xVACABeHfzG840QBrWmr6HjHkgIDusphFdqAXp9nynhXDkgBdd7GM58UAPs988sP6oCS2528Zy41QC79pzjhTFAA3rO1hFNu9AVvpR0aGme0siLO3aKOyeMmv/VeJ04zWDONajCrHVkjnlvpb7B5stJs3MeM4kHfTLeJCratpKO+O8z9xoqpDfT3r7mVY6Qx4lrgRuIURxazKyUJReDR6L4eQgCAIAgCAIAgCAIAgCAIAgBKAwtJ1rZMpevO+VnaPOMOa6woznkiTStKtV/Kjx0HV2lae6Gsu2YPa+Uf+x2Z+6FY0bVQ3vey+tNGwo/NPezq3Rzo/ZaNZdjvYvccXkfQbBkpZaG2HtN0c8f6ICA6/wBnCM+FEAvfZ8p88EALur7OM19PRASR1dcZ5IBdu+021jjvQAWV/tTH7ICdNwHFAH+75D6hANH7h5oCNBz5eqA+dG755/VAHe85j6IBpneHD1QH3p2AQGNrTV9lbWIba2bXiBiKjCoOIPBAU7T/AOzXRntNpZ2j2EAmoD8Nho7zXlxTzPEoRlmsSqv6KFpj/wCQ/lfH/wCi57Gm+w4O1oPOCMOy1O4mOvtM837vvL5sKfdPPwdDuIn+5nXrvX2n5n/8k2FPuj4Oh3ELXUzgQOvtKie8/f8AeTYU+6HZ0O4ibfUrmx7e08X8fnTYU+6HZ0O4g/Urg2evtPF+776bCn3R8HQ7iJbqR12evtMDm/L/AFpsKfdHwdDDoIiw1K5329p4v2/iTYU+6FZ0O4iLDUziff2n5n7Y+ZNhT7oVnQ7iA1M69d6+0/M//mmwp90fB0O4haamcCB19pX7z/8Akmwp90OzodxE22pXNj29pXe/d95HQp90OzodxEv1I4CevtMs35j8abCn3R8HQ7iFnqNzmz19pnm//mvuwp8B8HQ7iM7VHQkW/etzjHaa5+U5vXpU4LJHSNClHKKLdqL+z3RWH2l61isHsM/K39V7SO6WBatDsGscGMaGtEgNaAAMcAF9Pp6W/fHL6oCdOpEb/RAfWldwcvogA93y9UBOh908fQID40HEoCLL3h4lAfGlntHkgP/Z"
                width={60}
                height={60}
                alt=""
              />
            </a>
          </div>
          <form
            className="flex flex-col gap-4 mt-8  w-10/12"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col">
              <label htmlFor="name">Your Name </label>
              <input
                id="name"
                className="p-4 border rounded-lg hover:border-rose-700  "
                type="text"
                name="name"
                placeholder="Your Name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email Address </label>
              <input
                id="email"
                className="p-4 border rounded-lg hover:border-rose-700"
                type="email"
                name="email"
                placeholder="Email Address"
              />
            </div>
            <div className="flex flex-col">
              <label>message </label>
              <textarea
                id="message"
                className="p-4 pb-32 border rounded-lg hover:border-rose-700"
                name="message"
                placeholder="message"
              />
            </div>
            <button className=" mr-96 bg-rose-500 w-52 text-white text-2xl py-3 rounded-lg">
              send
            </button>
            {state.succeeded && (
              <h1 className="text-4xl font-semibold pt-12">
                <FontAwesomeIcon icon={faCheck} /> succeed
              </h1>
            )}
          </form>
        </div>
        <Image
          src={"/images/mail.svg"}
          width={500}
          height={500}
          alt=""
          className="gg mt-52"
        />
      </div>
    </section>
  );
};

export default Contact;
