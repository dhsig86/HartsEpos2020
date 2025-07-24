        document.getElementById('calculate-btn').addEventListener('click', function() {
            // Get all checkboxes with the name 'criteria'
            const criteria = document.querySelectorAll('input[name="criteria"]:checked');
            const score = criteria.length;
            
            const resultDiv = document.getElementById('result');
            
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
        });

        const flagIcon = document.getElementById('red-flag-icon');
        const flagsPanel = document.getElementById('red-flags-panel');

        function showFlags() {
            flagsPanel.style.display = 'block';
        }

        flagIcon.addEventListener('click', showFlags);
        flagIcon.addEventListener('mouseenter', showFlags);
        flagIcon.addEventListener('touchstart', showFlags);
