const Event = () => {
  return (
    <section class="space bg-auto" data-bg-src="assets/img/bg/event_bg_3.png">
      <div class="container">
        <div class="title-area text-center">
          <span class="sub-title">
            <span class="shape"></span> ইভেন্ট
          </span>
        </div>
        <div class="row gy-4">
          <div class="col">
            <div class="tab-content shedule-table-area">
              <div
                class="tab-pane fade show active"
                id="nav-one"
                role="tabpanel"
                aria-labelledby="nav-one-tab"
              >
                <div class="shedule-table">
                  <div class="table-column">
                    <div class="th">ক্রঃ</div>
                    <div class="td">০১</div>
                    <div class="td">০২ </div>
                    <div class="td">০৩</div>
                    <div class="td">০৪</div>
                    <div class="td">০৫</div>
                    <div class="td">০৬</div>
                    <div class="td">০৭</div>
                  </div>
                  <div class="table-column">
                    <div class="th">ইভেন্ট</div>
                    <div class="td">মোরগ লড়াই</div>
                    <div class="td">হাঁড়িভাঙ্গা</div>
                    <div class="td">হাঁটার সময় হাঁসের মতো হাঁটা</div>
                    <div class="td">তিন পায়ে দৌড়ানো</div>
                    <div class="td">ঝুড়িতে বল ফেলো</div>
                    <div class="td">হাসতে মানা</div>
                    <div class="td">লেবু চামচ দৌড়</div>
                  </div>
                  <div class="table-column">
                    <div class="th">নিয়ম</div>
                    <div class="td">-</div>
                    <div class="td">-</div>
                    <div class="td">
                      বসে বসে হাঁটার প্রতিযোগিতা, হাসির খোরাক প্রচুর!
                    </div>
                    <div class="td">
                      দুইজনের একটি করে পা বেঁধে দেওয়া হয়, একসাথে দৌড়াতে হয়।
                    </div>
                    <div class="td">
                      চোখ বাঁধা অবস্থায় নির্দিষ্ট দূরত্ব থেকে ঝুড়িতে বল ফেলতে
                      হবে।
                    </div>
                    <div class="td">
                      একজন নানা অদ্ভুত মুখভঙ্গি করে হাসানোর চেষ্টা করবে, বাকিদের
                      হাসলে বাদ
                    </div>
                    <div class="td">
                      চামচে লেবু নিয়ে দৌড়াতে হবে-লেবু পড়লে শুরু থেকে শুরু।{" "}
                    </div>
                  </div>
                  {/* <div class="table-column">
                    <div class="th">ইচ্ছুক?</div>
                    <div class="td">
                      <button class="vs-btn">আমি খেলবো</button>
                    </div>
                    <div class="td">
                      <button class="vs-btn">আমি খেলবো</button>
                    </div>
                    <div class="td">
                      <button class="vs-btn">আমি খেলবো</button>
                    </div>
                    <div class="td">
                      <button class="vs-btn">আমি খেলবো</button>
                    </div>
                    <div class="td">
                      <button class="vs-btn">আমি খেলবো</button>
                    </div>
                    <div class="td">
                      <button class="vs-btn">আমি খেলবো</button>
                    </div>
                    <div class="td">
                      <button class="vs-btn">আমি খেলবো</button>
                    </div>
                  </div> */}
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="nav-two"
                role="tabpanel"
                aria-labelledby="nav-two-tab"
              >
                <div class="shedule-table">
                  <div class="table-column">
                    <div class="th">Time</div>
                    <div class="td">
                      <i class="fa-light fa-clock"></i> 9:00 - 10:00 AM
                    </div>
                    <div class="td">
                      <i class="fa-light fa-clock"></i> 8:00 - 10:00 PM
                    </div>
                    <div class="td">
                      <i class="fa-light fa-clock"></i> 6:00 - 10:00 AM
                    </div>
                    <div class="td">
                      <i class="fa-light fa-clock"></i> 2:00 - 04:00 PM
                    </div>
                    <div class="td">
                      <i class="fa-light fa-clock"></i> 9:00 - 10:00 AM
                    </div>
                  </div>
                  <div class="table-column">
                    <div class="th">Bands</div>
                    <div class="td">Club Media Hip</div>
                    <div class="td">Live Pop Workout</div>
                    <div class="td">Band Classic</div>
                    <div class="td">Rock & Roll Pops</div>
                    <div class="td">Flok Reuze Hits</div>
                  </div>
                  <div class="table-column">
                    <div class="th">Artists</div>
                  </div>
                  <div class="table-column">
                    <div class="th">Stages</div>
                    <div class="td">Main Stage</div>
                    <div class="td">Stage - 2</div>
                    <div class="td">Stage - 3</div>
                    <div class="td">Stage - 4</div>
                    <div class="td">Stage - 5</div>
                  </div>
                  <div class="table-column">
                    <div class="th">Ticket</div>
                    <div class="td">
                      <a href="shop.html" class="vs-btn">
                        BUY TICKET
                      </a>
                    </div>
                    <div class="td">
                      <a href="shop.html" class="vs-btn">
                        BUY TICKET
                      </a>
                    </div>
                    <div class="td">
                      <a href="shop.html" class="vs-btn">
                        BUY TICKET
                      </a>
                    </div>
                    <div class="td">
                      <a href="shop.html" class="vs-btn">
                        BUY TICKET
                      </a>
                    </div>
                    <div class="td">
                      <a href="shop.html" class="vs-btn">
                        BUY TICKET
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="nav-three"
                role="tabpanel"
                aria-labelledby="nav-three-tab"
              >
                <div class="shedule-table">
                  <div class="table-column">
                    <div class="th">Time</div>
                    <div class="td">
                      <i class="fa-light fa-clock"></i> 9:00 - 10:00 AM
                    </div>
                    <div class="td">
                      <i class="fa-light fa-clock"></i> 8:00 - 10:00 PM
                    </div>
                    <div class="td">
                      <i class="fa-light fa-clock"></i> 6:00 - 10:00 AM
                    </div>
                    <div class="td">
                      <i class="fa-light fa-clock"></i> 2:00 - 04:00 PM
                    </div>
                    <div class="td">
                      <i class="fa-light fa-clock"></i> 9:00 - 10:00 AM
                    </div>
                  </div>
                  <div class="table-column">
                    <div class="th">Bands</div>
                    <div class="td">Club Media Hip</div>
                    <div class="td">Live Pop Workout</div>
                    <div class="td">Band Classic</div>
                    <div class="td">Rock & Roll Pops</div>
                    <div class="td">Flok Reuze Hits</div>
                  </div>
                  <div class="table-column">
                    <div class="th">Artists</div>
                  </div>
                  <div class="table-column">
                    <div class="th">Stages</div>
                    <div class="td">Main Stage</div>
                    <div class="td">Stage - 2</div>
                    <div class="td">Stage - 3</div>
                    <div class="td">Stage - 4</div>
                    <div class="td">Stage - 5</div>
                  </div>
                  <div class="table-column">
                    <div class="th">Ticket</div>
                    <div class="td">
                      <a href="shop.html" class="vs-btn">
                        BUY TICKET
                      </a>
                    </div>
                    <div class="td">
                      <a href="shop.html" class="vs-btn">
                        BUY TICKET
                      </a>
                    </div>
                    <div class="td">
                      <a href="shop.html" class="vs-btn">
                        BUY TICKET
                      </a>
                    </div>
                    <div class="td">
                      <a href="shop.html" class="vs-btn">
                        BUY TICKET
                      </a>
                    </div>
                    <div class="td">
                      <a href="shop.html" class="vs-btn">
                        BUY TICKET
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="nav-four"
                role="tabpanel"
                aria-labelledby="nav-four-tab"
              >
                <div class="shedule-table">
                  <div class="table-column">
                    <div class="th">Time</div>
                    <div class="td">
                      <i class="fa-light fa-clock"></i> 9:00 - 10:00 AM
                    </div>
                    <div class="td">
                      <i class="fa-light fa-clock"></i> 8:00 - 10:00 PM
                    </div>
                    <div class="td">
                      <i class="fa-light fa-clock"></i> 6:00 - 10:00 AM
                    </div>
                    <div class="td">
                      <i class="fa-light fa-clock"></i> 2:00 - 04:00 PM
                    </div>
                    <div class="td">
                      <i class="fa-light fa-clock"></i> 9:00 - 10:00 AM
                    </div>
                  </div>
                  <div class="table-column">
                    <div class="th">Bands</div>
                    <div class="td">Club Media Hip</div>
                    <div class="td">Live Pop Workout</div>
                    <div class="td">Band Classic</div>
                    <div class="td">Rock & Roll Pops</div>
                    <div class="td">Flok Reuze Hits</div>
                  </div>
                  <div class="table-column">
                    <div class="th">Artists</div>
                  </div>
                  <div class="table-column">
                    <div class="th">Stages</div>
                    <div class="td">Main Stage</div>
                    <div class="td">Stage - 2</div>
                    <div class="td">Stage - 3</div>
                    <div class="td">Stage - 4</div>
                    <div class="td">Stage - 5</div>
                  </div>
                  <div class="table-column">
                    <div class="th">Ticket</div>
                    <div class="td">
                      <a href="shop.html" class="vs-btn">
                        BUY TICKET
                      </a>
                    </div>
                    <div class="td">
                      <a href="shop.html" class="vs-btn">
                        BUY TICKET
                      </a>
                    </div>
                    <div class="td">
                      <a href="shop.html" class="vs-btn">
                        BUY TICKET
                      </a>
                    </div>
                    <div class="td">
                      <a href="shop.html" class="vs-btn">
                        BUY TICKET
                      </a>
                    </div>
                    <div class="td">
                      <a href="shop.html" class="vs-btn">
                        BUY TICKET
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;
