function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Remove the item at the specified index
  cart.splice(index, 1);

  // Save the updated cart back to local storage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Update the cart display
  updateCartDisplay();
}

function removeFromCartAll() {
  let cart = [];

  // Save the updated cart back to local storage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Update the cart display
  updateCartDisplay();
}

function updateCartDisplay() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  console.log(cart);
  let cartItemsList = document.getElementById("cartParts");

  // Clear the current cart display
  cartItemsList.innerHTML = "";

  // Update the cart display with the current items
  cart.forEach((item, index) => {
    const row = document.createElement("div");
    if (item.price == 1) {
      row.innerHTML = item2;
    } else if (item.price == 2) {
      row.innerHTML = item3;
    } else {
      row.innerHTML = item1;
    }

    cartItemsList.appendChild(row);
  });
}
document.addEventListener("DOMContentLoaded", () => {
  updateCartDisplay();
});

var item1 =
  "<div" +
  '            style="' +
  "              justify-content: center;" +
  "              align-items: center;" +
  "              gap: 24px;" +
  "              display: inline-flex;" +
  '            "' +
  "          >" +
  "            <div" +
  '              style="' +
  "                justify-content: flex-start;" +
  "                align-items: center;" +
  "                gap: 12px;" +
  "                display: flex;" +
  '              "' +
  "            >" +
  '              <div style="width: 24px; height: 24px; position: relative">' +
  "                <div" +
  '                  style="' +
  "                    width: 24px;" +
  "                    height: 24px;" +
  "                    left: 0px;" +
  "                    top: 0px;" +
  "                    position: absolute;" +
  '                  "' +
  "                ></div>" +
  "                <div" +
  '                  style="' +
  "                    width: 18px;" +
  "                    height: 18px;" +
  "                    left: 3px;" +
  "                    top: 3px;" +
  "                    position: absolute;" +
  "                    border: 1.5px #929fa5 solid;" +
  '                  "' +
  "                ></div>" +
  "                <div" +
  '                  style="' +
  "                    width: 6px;" +
  "                    height: 6px;" +
  "                    left: 9px;" +
  "                    top: 9px;" +
  "                    position: absolute;" +
  "                    border: 1.5px #929fa5 solid;" +
  '                  "' +
  "                ></div>" +
  "                <div" +
  '                  style="' +
  "                    width: 6px;" +
  "                    height: 6px;" +
  "                    left: 9px;" +
  "                    top: 9px;" +
  "                    position: absolute;" +
  "                    border: 1.5px #929fa5 solid;" +
  '                  "' +
  "                ></div>" +
  "              </div>" +
  "              <img" +
  '                style="width: 72px; height: 72px; border-radius: 2px"' +
  '                src="https://m.media-amazon.com/images/I/71vD7xVhEGL._AC_SX679_.jpg"' +
  "              />" +
  "              <div" +
  '                style="' +
  "                  width: 260px;" +
  "                  color: #191c1f;" +
  "                  font-size: 14px;" +
  "                  font-family: Public Sans;" +
  "                  font-weight: 400;" +
  "                  line-height: 20px;" +
  "                  word-wrap: break-word;" +
  '                "' +
  "              >" +
  "                Womens Wearable Sports Fits Grey Spots Fit  " +
  "              </div>" +
  "            </div>" +
  '            <div style="width: 88px; height: 20px; position: relative">' +
  "              <div" +
  '                style="' +
  "                  left: 0px;" +
  "                  top: 0px;" +
  "                  position: absolute;" +
  "                  color: #929fa5;" +
  "                  font-size: 14px;" +
  "                  font-family: Public Sans;" +
  "                  font-weight: 400;" +
  "                  text-decoration: line-through;" +
  "                  line-height: 20px;" +
  "                  word-wrap: break-word;" +
  '                "' +
  "              >" +
  "                $99" +
  "              </div>" +
  "              <div" +
  '                style="' +
  "                  left: 31px;" +
  "                  top: 0px;" +
  "                  position: absolute;" +
  "                  color: #475156;" +
  "                  font-size: 14px;" +
  "                  font-family: Public Sans;" +
  "                  font-weight: 400;" +
  "                  line-height: 20px;" +
  "                  word-wrap: break-word;" +
  '                "' +
  "              >" +
  "                $34" +
  "              </div>" +
  "            </div>" +
  "            <div" +
  '              style="' +
  "                padding-right: 24px;" +
  "                flex-direction: column;" +
  "                justify-content: flex-start;" +
  "                align-items: flex-start;" +
  "                gap: 10px;" +
  "                display: inline-flex;" +
  '              "' +
  "            >" +
  "              <div" +
  '                style="' +
  "                  width: 148px;" +
  "                  padding-left: 20px;" +
  "                  padding-right: 20px;" +
  "                  padding-top: 12px;" +
  "                  padding-bottom: 12px;" +
  "                  background: white;" +
  "                  border-radius: 3px;" +
  "                  border: 1px #e4e7e9 solid;" +
  "                  justify-content: space-between;" +
  "                  align-items: center;" +
  "                  display: inline-flex;" +
  '                "' +
  "              >" +
  '                <div style="width: 16px; height: 16px; position: relative">' +
  "                  <div" +
  '                    style="' +
  "                      width: 16px;" +
  "                      height: 16px;" +
  "                      left: 0px;" +
  "                      top: 0px;" +
  "                      position: absolute;" +
  '                    "' +
  "                  ></div>" +
  "                  <div" +
  '                    style="' +
  "                      width: 11px;" +
  "                      height: 0px;" +
  "                      left: 2.5px;" +
  "                      top: 8px;" +
  "                      position: absolute;" +
  "                      border: 1.5px #929fa5 solid;" +
  '                    "' +
  "                  ></div>" +
  "                </div>" +
  "                <div" +
  '                  style="' +
  "                    color: #475156;" +
  "                    font-size: 16px;" +
  "                    font-family: Public Sans;" +
  "                    font-weight: 400;" +
  "                    line-height: 24px;" +
  "                    word-wrap: break-word;" +
  '                  "' +
  "                >" +
  "                  01" +
  "                </div>" +
  '                <div style="width: 16px; height: 16px; position: relative">' +
  "                  <div" +
  '                    style="' +
  "                      width: 16px;" +
  "                      height: 16px;" +
  "                      left: 0px;" +
  "                      top: 0px;" +
  "                      position: absolute;" +
  '                    "' +
  "                  ></div>" +
  "                  <div" +
  '                    style="' +
  "                      width: 11px;" +
  "                      height: 0px;" +
  "                      left: 2.5px;" +
  "                      top: 8px;" +
  "                      position: absolute;" +
  "                      border: 1.5px #191c1f solid;" +
  '                    "' +
  "                  ></div>" +
  "                  <div" +
  '                    style="' +
  "                      width: 0px;" +
  "                      height: 11px;" +
  "                      left: 8px;" +
  "                      top: 2.5px;" +
  "                      position: absolute;" +
  "                      border: 1.5px #191c1f solid;" +
  '                    "' +
  "                  ></div>" +
  "                </div>" +
  "              </div>" +
  "            </div>" +
  "            <div" +
  '              style="' +
  "                width: 112px;" +
  "                color: #191c1f;" +
  "                font-size: 14px;" +
  "                font-family: Public Sans;" +
  "                font-weight: 500;" +
  "                line-height: 20px;" +
  "                word-wrap: break-word;" +
  '              "' +
  "            >" +
  "              $34" +
  "            </div>" +
  "          </div>";

var item2 =
  "<div" +
  '            style="' +
  "              justify-content: center;" +
  "              align-items: center;" +
  "              gap: 24px;" +
  "              display: inline-flex;" +
  '            "' +
  "          >" +
  "            <div" +
  '              style="' +
  "                justify-content: flex-start;" +
  "                align-items: center;" +
  "                gap: 12px;" +
  "                display: flex;" +
  '              "' +
  "            >" +
  '              <div style="width: 24px; height: 24px; position: relative">' +
  "                <div" +
  '                  style="' +
  "                    width: 24px;" +
  "                    height: 24px;" +
  "                    left: 0px;" +
  "                    top: 0px;" +
  "                    position: absolute;" +
  '                  "' +
  "                ></div>" +
  "                <div" +
  '                  style="' +
  "                    width: 18px;" +
  "                    height: 18px;" +
  "                    left: 3px;" +
  "                    top: 3px;" +
  "                    position: absolute;" +
  "                    border: 1.5px #929fa5 solid;" +
  '                  "' +
  "                ></div>" +
  "                <div" +
  '                  style="' +
  "                    width: 6px;" +
  "                    height: 6px;" +
  "                    left: 9px;" +
  "                    top: 9px;" +
  "                    position: absolute;" +
  "                    border: 1.5px #929fa5 solid;" +
  '                  "' +
  "                ></div>" +
  "                <div" +
  '                  style="' +
  "                    width: 6px;" +
  "                    height: 6px;" +
  "                    left: 9px;" +
  "                    top: 9px;" +
  "                    position: absolute;" +
  "                    border: 1.5px #929fa5 solid;" +
  '                  "' +
  "                ></div>" +
  "              </div>" +
  "              <img" +
  '                style="width: 72px; height: 72px; border-radius: 2px"' +
  '                src="https://png.pngtree.com/png-clipart/20230109/original/pngtree-golf-sticks-png-image_8891781.png"' +
  "              />" +
  "              <div" +
  '                style="' +
  "                  width: 260px;" +
  "                  color: #191c1f;" +
  "                  font-size: 14px;" +
  "                  font-family: Public Sans;" +
  "                  font-weight: 400;" +
  "                  line-height: 20px;" +
  "                  word-wrap: break-word;" +
  '                "' +
  "              >" +
  "                2020 Golf Stick Grey with plastic handle - Space grey" +
  "              </div>" +
  "            </div>" +
  '            <div style="width: 88px; height: 20px; position: relative">' +
  "              <div" +
  '                style="' +
  "                  left: 0px;" +
  "                  top: 0px;" +
  "                  position: absolute;" +
  "                  color: #929fa5;" +
  "                  font-size: 14px;" +
  "                  font-family: Public Sans;" +
  "                  font-weight: 400;" +
  "                  text-decoration: line-through;" +
  "                  line-height: 20px;" +
  "                  word-wrap: break-word;" +
  '                "' +
  "              >" +
  "                $99" +
  "              </div>" +
  "              <div" +
  '                style="' +
  "                  left: 31px;" +
  "                  top: 0px;" +
  "                  position: absolute;" +
  "                  color: #475156;" +
  "                  font-size: 14px;" +
  "                  font-family: Public Sans;" +
  "                  font-weight: 400;" +
  "                  line-height: 20px;" +
  "                  word-wrap: break-word;" +
  '                "' +
  "              >" +
  "                $120" +
  "              </div>" +
  "            </div>" +
  "            <div" +
  '              style="' +
  "                padding-right: 24px;" +
  "                flex-direction: column;" +
  "                justify-content: flex-start;" +
  "                align-items: flex-start;" +
  "                gap: 10px;" +
  "                display: inline-flex;" +
  '              "' +
  "            >" +
  "              <div" +
  '                style="' +
  "                  width: 148px;" +
  "                  padding-left: 20px;" +
  "                  padding-right: 20px;" +
  "                  padding-top: 12px;" +
  "                  padding-bottom: 12px;" +
  "                  background: white;" +
  "                  border-radius: 3px;" +
  "                  border: 1px #e4e7e9 solid;" +
  "                  justify-content: space-between;" +
  "                  align-items: center;" +
  "                  display: inline-flex;" +
  '                "' +
  "              >" +
  '                <div style="width: 16px; height: 16px; position: relative">' +
  "                  <div" +
  '                    style="' +
  "                      width: 16px;" +
  "                      height: 16px;" +
  "                      left: 0px;" +
  "                      top: 0px;" +
  "                      position: absolute;" +
  '                    "' +
  "                  ></div>" +
  "                  <div" +
  '                    style="' +
  "                      width: 11px;" +
  "                      height: 0px;" +
  "                      left: 2.5px;" +
  "                      top: 8px;" +
  "                      position: absolute;" +
  "                      border: 1.5px #929fa5 solid;" +
  '                    "' +
  "                  ></div>" +
  "                </div>" +
  "                <div" +
  '                  style="' +
  "                    color: #475156;" +
  "                    font-size: 16px;" +
  "                    font-family: Public Sans;" +
  "                    font-weight: 400;" +
  "                    line-height: 24px;" +
  "                    word-wrap: break-word;" +
  '                  "' +
  "                >" +
  "                  01" +
  "                </div>" +
  '                <div style="width: 16px; height: 16px; position: relative">' +
  "                  <div" +
  '                    style="' +
  "                      width: 16px;" +
  "                      height: 16px;" +
  "                      left: 0px;" +
  "                      top: 0px;" +
  "                      position: absolute;" +
  '                    "' +
  "                  ></div>" +
  "                  <div" +
  '                    style="' +
  "                      width: 11px;" +
  "                      height: 0px;" +
  "                      left: 2.5px;" +
  "                      top: 8px;" +
  "                      position: absolute;" +
  "                      border: 1.5px #191c1f solid;" +
  '                    "' +
  "                  ></div>" +
  "                  <div" +
  '                    style="' +
  "                      width: 0px;" +
  "                      height: 11px;" +
  "                      left: 8px;" +
  "                      top: 2.5px;" +
  "                      position: absolute;" +
  "                      border: 1.5px #191c1f solid;" +
  '                    "' +
  "                  ></div>" +
  "                </div>" +
  "              </div>" +
  "            </div>" +
  "            <div" +
  '              style="' +
  "                width: 112px;" +
  "                color: #191c1f;" +
  "                font-size: 14px;" +
  "                font-family: Public Sans;" +
  "                font-weight: 500;" +
  "                line-height: 20px;" +
  "                word-wrap: break-word;" +
  '              "' +
  "            >" +
  "              $120" +
  "            </div>" +
  "          </div>";

var item3 =
  "<div" +
  '            style="' +
  "              justify-content: center;" +
  "              align-items: center;" +
  "              gap: 24px;" +
  "              display: inline-flex;" +
  '            "' +
  "          >" +
  "            <div" +
  '              style="' +
  "                justify-content: flex-start;" +
  "                align-items: center;" +
  "                gap: 12px;" +
  "                display: flex;" +
  '              "' +
  "            >" +
  '              <div style="width: 24px; height: 24px; position: relative">' +
  "                <div" +
  '                  style="' +
  "                    width: 24px;" +
  "                    height: 24px;" +
  "                    left: 0px;" +
  "                    top: 0px;" +
  "                    position: absolute;" +
  '                  "' +
  "                ></div>" +
  "                <div" +
  '                  style="' +
  "                    width: 18px;" +
  "                    height: 18px;" +
  "                    left: 3px;" +
  "                    top: 3px;" +
  "                    position: absolute;" +
  "                    border: 1.5px #929fa5 solid;" +
  '                  "' +
  "                ></div>" +
  "                <div" +
  '                  style="' +
  "                    width: 6px;" +
  "                    height: 6px;" +
  "                    left: 9px;" +
  "                    top: 9px;" +
  "                    position: absolute;" +
  "                    border: 1.5px #929fa5 solid;" +
  '                  "' +
  "                ></div>" +
  "                <div" +
  '                  style="' +
  "                    width: 6px;" +
  "                    height: 6px;" +
  "                    left: 9px;" +
  "                    top: 9px;" +
  "                    position: absolute;" +
  "                    border: 1.5px #929fa5 solid;" +
  '                  "' +
  "                ></div>" +
  "              </div>" +
  "              <img" +
  '                style="width: 72px; height: 72px; border-radius: 2px"' +
  '                src="https://hips.hearstapps.com/hmg-prod/images/tennis-racket-and-ball-still-life-with-long-shadow-royalty-free-image-1685467062.jpg"' +
  "              />" +
  "              <div" +
  '                style="' +
  "                  width: 260px;" +
  "                  color: #191c1f;" +
  "                  font-size: 14px;" +
  "                  font-family: Public Sans;" +
  "                  font-weight: 400;" +
  "                  line-height: 20px;" +
  "                  word-wrap: break-word;" +
  '                "' +
  "              >" +
  "                Best Tennis Racket Ever Made Green  " +
  "              </div>" +
  "            </div>" +
  '            <div style="width: 88px; height: 20px; position: relative">' +
  "              <div" +
  '                style="' +
  "                  left: 0px;" +
  "                  top: 0px;" +
  "                  position: absolute;" +
  "                  color: #929fa5;" +
  "                  font-size: 14px;" +
  "                  font-family: Public Sans;" +
  "                  font-weight: 400;" +
  "                  text-decoration: line-through;" +
  "                  line-height: 20px;" +
  "                  word-wrap: break-word;" +
  '                "' +
  "              >" +
  "                $99" +
  "              </div>" +
  "              <div" +
  '                style="' +
  "                  left: 31px;" +
  "                  top: 0px;" +
  "                  position: absolute;" +
  "                  color: #475156;" +
  "                  font-size: 14px;" +
  "                  font-family: Public Sans;" +
  "                  font-weight: 400;" +
  "                  line-height: 20px;" +
  "                  word-wrap: break-word;" +
  '                "' +
  "              >" +
  "                $70" +
  "              </div>" +
  "            </div>" +
  "            <div" +
  '              style="' +
  "                padding-right: 24px;" +
  "                flex-direction: column;" +
  "                justify-content: flex-start;" +
  "                align-items: flex-start;" +
  "                gap: 10px;" +
  "                display: inline-flex;" +
  '              "' +
  "            >" +
  "              <div" +
  '                style="' +
  "                  width: 148px;" +
  "                  padding-left: 20px;" +
  "                  padding-right: 20px;" +
  "                  padding-top: 12px;" +
  "                  padding-bottom: 12px;" +
  "                  background: white;" +
  "                  border-radius: 3px;" +
  "                  border: 1px #e4e7e9 solid;" +
  "                  justify-content: space-between;" +
  "                  align-items: center;" +
  "                  display: inline-flex;" +
  '                "' +
  "              >" +
  '                <div style="width: 16px; height: 16px; position: relative">' +
  "                  <div" +
  '                    style="' +
  "                      width: 16px;" +
  "                      height: 16px;" +
  "                      left: 0px;" +
  "                      top: 0px;" +
  "                      position: absolute;" +
  '                    "' +
  "                  ></div>" +
  "                  <div" +
  '                    style="' +
  "                      width: 11px;" +
  "                      height: 0px;" +
  "                      left: 2.5px;" +
  "                      top: 8px;" +
  "                      position: absolute;" +
  "                      border: 1.5px #929fa5 solid;" +
  '                    "' +
  "                  ></div>" +
  "                </div>" +
  "                <div" +
  '                  style="' +
  "                    color: #475156;" +
  "                    font-size: 16px;" +
  "                    font-family: Public Sans;" +
  "                    font-weight: 400;" +
  "                    line-height: 24px;" +
  "                    word-wrap: break-word;" +
  '                  "' +
  "                >" +
  "                  01" +
  "                </div>" +
  '                <div style="width: 16px; height: 16px; position: relative">' +
  "                  <div" +
  '                    style="' +
  "                      width: 16px;" +
  "                      height: 16px;" +
  "                      left: 0px;" +
  "                      top: 0px;" +
  "                      position: absolute;" +
  '                    "' +
  "                  ></div>" +
  "                  <div" +
  '                    style="' +
  "                      width: 11px;" +
  "                      height: 0px;" +
  "                      left: 2.5px;" +
  "                      top: 8px;" +
  "                      position: absolute;" +
  "                      border: 1.5px #191c1f solid;" +
  '                    "' +
  "                  ></div>" +
  "                  <div" +
  '                    style="' +
  "                      width: 0px;" +
  "                      height: 11px;" +
  "                      left: 8px;" +
  "                      top: 2.5px;" +
  "                      position: absolute;" +
  "                      border: 1.5px #191c1f solid;" +
  '                    "' +
  "                  ></div>" +
  "                </div>" +
  "              </div>" +
  "            </div>" +
  "            <div" +
  '              style="' +
  "                width: 112px;" +
  "                color: #191c1f;" +
  "                font-size: 14px;" +
  "                font-family: Public Sans;" +
  "                font-weight: 500;" +
  "                line-height: 20px;" +
  "                word-wrap: break-word;" +
  '              "' +
  "            >" +
  "              $70" +
  "            </div>" +
  "          </div>";
