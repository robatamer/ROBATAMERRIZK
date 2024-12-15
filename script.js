const images = document.querySelectorAll('.workImage');
images.forEach(image => {
    image.addEventListener('click', function() {
        let message = '';  
        if (image.id === 'roba') {
            message= 'in this picture, I was broken and had lost hope in many aspects of my life. But having her by my side helped me get through that phase. That is why this picture is so special to me';
        } else if (image.id === 'amira') {
            message = 'Amira and I have a tradition where, on every occasion, we must take the same picture. We have many of them in this exact pose. Even if we are running late, it doesn not matter the picture is what matters most.';
        } else if (image.id === 'robaAndAmira') {
            message = 'This picture is from the shortest trip, but it was by far the funniest trip ever. I truly love having her by my side in every moment';
        }
        document.getElementById('message').textContent = message;
    });
});
