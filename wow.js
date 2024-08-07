
    function validateForm() {
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const emailAddress = document.getElementById('emailAddress').value.trim();
        const password = document.getElementById('password').value.trim();
        
        let isValid = true;
        let errorMessage = "";

        if (firstName === "") {
            errorMessage += "First name กรุณากรอกข้อมูล.\n";
            isValid = false;
        }
        if (lastName === "") {
            errorMessage += "Last name กรุณากรอกข้อมูล.\n";
            isValid = false;
        }
        if (emailAddress === "") {
            errorMessage += "Email address กรุณากรอกข้อมูล.\n";
            isValid = false;
        } else {
            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!emailAddress.match(emailPattern)) {
                errorMessage += "กรุณากรอกที่อยู่อีเมล์ที่ถูกต้อง.\n";
                isValid = false;
            }
        }
        if (password === "") {
            errorMessage += "Password กรุณากรอกข้อมูล.\n";
            isValid = false;
        }

        if (!isValid) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: errorMessage,
                confirmButtonText: 'ตกลง'
            });
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Form submitted successfully!',
                confirmButtonText: 'ตกลง'
            });
        }
    }