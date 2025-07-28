        const resultDiv = document.getElementById('result');

        document.getElementById('calculate-btn').addEventListener('click', function() {
            // Get all checkboxes with the name 'criteria'
            const criteria = document.querySelectorAll('input[name="criteria"]:checked');
            const score = criteria.length;

            
            // Reset previous results
            resultDiv.style.display = 'block';
            resultDiv.classList.remove('result-unlikely', 'result-likely');
            
            // Determine the result based on the score
            if (score >= 3) {
                resultDiv.innerHTML = `<strong>Resultado: RSAB Provável (Pontuação: ${score})</strong><br>Considerar antibioterapia conforme as diretrizes do EPOS 2020. A seleção cuidadosa do paciente é essencial.`;
                resultDiv.classList.add('result-likely');
            } else {
                resultDiv.innerHTML = `<strong>Resultado: RSAB Pouco Provável (Pontuação: ${score})</strong><br>O quadro é mais consistente com Rinossinusite Viral ou Pós-Viral. A antibioterapia não é recomendada. Sugere-se tratamento sintomático.`;
                resultDiv.classList.add('result-unlikely');
            }
            printBtn.style.display = 'inline-block';
        });

        const helpBtn = document.getElementById('help-btn');
        const helpSection = document.getElementById('help-section');

        helpBtn.addEventListener('click', function() {
            if (helpSection.style.display === 'block') {
                helpSection.style.display = 'none';
            } else {
                helpSection.style.display = 'block';
            }
        });

        const flagIcon = document.getElementById('red-flag-icon');
        const flagsPanel = document.getElementById('red-flags-panel');

        function showFlags() {
            flagsPanel.style.display = 'block';
        }

        function toggleFlags() {
            if (flagsPanel.style.display === 'block') {
                flagsPanel.style.display = 'none';
            } else {
                flagsPanel.style.display = 'block';
            }
        }

        function hideFlags() {
            flagsPanel.style.display = 'none';
        }

        flagIcon.addEventListener('click', toggleFlags);
        flagIcon.addEventListener('mouseenter', showFlags);
        flagIcon.addEventListener('touchstart', toggleFlags);
        flagsPanel.addEventListener('mouseleave', hideFlags);

        const resetBtn = document.getElementById('reset-btn');
        const printBtn = document.getElementById('print-btn');
        const prescriptionsBtn = document.getElementById('prescriptions-btn');
        const backBtn = document.getElementById('back-btn');
        const prescriptionsSection = document.getElementById('prescriptions-section');

        resetBtn.addEventListener('click', function() {
            document.querySelectorAll('input[name="criteria"]').forEach(cb => cb.checked = false);
            resultDiv.style.display = 'none';
            resultDiv.classList.remove('result-unlikely', 'result-likely');
            resultDiv.innerHTML = '';
            printBtn.style.display = 'none';
        });

        printBtn.addEventListener('click', function() {
            window.print();
        });

        prescriptionsBtn.addEventListener('click', function() {
            resultDiv.scrollIntoView();
            resultDiv.style.display = 'none';
            prescriptionsSection.style.display = 'block';
        });

        backBtn.addEventListener('click', function() {
            prescriptionsSection.style.display = 'none';
            resultDiv.style.display = 'block';
        });
