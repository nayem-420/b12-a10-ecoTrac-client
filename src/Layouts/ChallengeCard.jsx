import React from 'react';

const ChallengeCard = () => {
    return (
      <section className="bg-green-50 py-8">
        // {/* Carousel */}
        //{" "}
        <Carousel showThumbs={false} autoPlay infiniteLoop>
          //{" "}
          <div>
            // <img src="/images/plastic-free.jpg" alt="Plastic Free July" />
            //{" "}
            <div className="legend bg-opacity-70">
              // <h2 className="text-2xl font-bold">Plastic-Free July</h2>
              // <p>Avoid single-use plastic for one month</p>
              //{" "}
              <button className="btn btn-success mt-2">View Challenge</button>
              //{" "}
            </div>
            //{" "}
          </div>
          //{" "}
          <div>
            // <img src="/images/save-energy.jpg" alt="Energy Saver" />
            //{" "}
            <div className="legend bg-opacity-70">
              // <h2 className="text-2xl font-bold">Save Energy Week</h2>
              // <p>Reduce electricity usage by 10%</p>
              //{" "}
              <button className="btn btn-success mt-2">View Challenge</button>
              //{" "}
            </div>
            //{" "}
          </div>
          //{" "}
        </Carousel>
        // {/* Live Stats */}
        //{" "}
        <div className="grid grid-cols-3 text-center mt-6">
          //{" "}
          <div>
            // <h3 className="text-3xl font-bold text-green-700">12,500 kg</h3>
            // <p>CO₂ Saved</p>
            //{" "}
          </div>
          //{" "}
          <div>
            // <h3 className="text-3xl font-bold text-green-700">3,200 kg</h3>
            // <p>Plastic Reduced</p>
            //{" "}
          </div>
          //{" "}
          <div>
            // <h3 className="text-3xl font-bold text-green-700">1,245+</h3>
            // <p>Active Members</p>
            //{" "}
          </div>
          //{" "}
        </div>
        //{" "}
      </section>
    );
};

export default ChallengeCard;