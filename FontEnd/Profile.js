class Profile {
  constructor(Id, Name, Address, Phone, BirthDay) {
    this.Id = Id;
    this.Name = Name;
    this.Address = Address;
    this.Phone = Phone;
    this.BirthDay = BirthDay;
  }

  getName() {
    return ` <div class="Post-Item-Top">
    <div style="display: flex">
      <div>
        <a href="">
          <img src="./images/th.jfif" alt="" />
        </a>
      </div>
      <div>
        <h4>Nghĩa Nghĩa</h4>
        <p>Được tài trợ</p>
      </div>
    </div>
    <div>
      <svg
        fill="currentColor"
        viewBox="0 0 20 20"
        width="1em"
        height="1em"
        style="font-size: 22px; color: #65676b; margin-right: 10px"
      >
        <g fill-rule="evenodd" transform="translate(-446 -350)">
          <path
            d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
          ></path>
        </g>
      </svg>
    </div>
  </div>`;
  }
}
