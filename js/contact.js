const handleContact=()=>{
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const message=document.getElementById("message").value;
    const info={
        name:name,
        email:email,
        message:message, 
    }
    

    if (name=="" || email==""||message==""){
        const alertMessage = document.createElement('div');
        alertMessage.textContent = 'Message don"t send. All fields are required!';
        alertMessage.style.backgroundColor = '#Ff0000';
        alertMessage.style.color = 'white';
        alertMessage.style.padding = '10px';
        alertMessage.style.position = 'fixed';
        alertMessage.style.top = '10px';
        alertMessage.style.left = '50%';
        alertMessage.style.transform = 'translateX(-50%)';
        alertMessage.style.zIndex = '9999';
        document.body.appendChild(alertMessage);
        
        setTimeout(function() {
            alertMessage.style.display = 'none';
        }, 1500);
        return;
      }

    fetch("https://najim90.pythonanywhere.com/contact/list/",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(info),
    })
    .then(response=>{
        if (response.ok) {
            const alertMessage = document.createElement('div');
                alertMessage.textContent = 'Message sent successfully!';
                alertMessage.style.backgroundColor = '#4CAF50';
                alertMessage.style.color = 'white';
                alertMessage.style.padding = '10px';
                alertMessage.style.position = 'fixed';
                alertMessage.style.top = '10px';
                alertMessage.style.left = '50%';
                alertMessage.style.transform = 'translateX(-50%)';
                alertMessage.style.zIndex = '9999';
                document.body.appendChild(alertMessage);
                
                setTimeout(function() {
                    alertMessage.style.display = 'none';
                }, 1500);
            document.getElementById("contactForm").reset();
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
            console.log('send success')
        }
        else{
            console.log('send error');
        }
    })
}
