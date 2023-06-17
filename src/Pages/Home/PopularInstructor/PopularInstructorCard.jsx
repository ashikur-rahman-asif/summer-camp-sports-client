function PopularInstructorCard({ instructor }) {
    const {
        _id,
        image,
        email,
        userName
      } = instructor;
    return (
        <div className="card bg-white rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 cursor-pointer">
        <img src={image}  className="object-cover w-full h-96 rounded-t-lg" />
        <div className="p-4">
          <h3 className="text-xl font-semibold">{userName}</h3>
          <p className="text-lg font-bold text-black">{email}</p>
        </div>
      </div>
    );
};

export default PopularInstructorCard;