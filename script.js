        const resultDiv = document.getElementById('result');
        const antibioticContent = document.getElementById('antibiotic-content');
        let isLikely = null;

        document.getElementById('calculate-btn').addEventListener('click', function() {
            // Get all checkboxes with the name 'criteria'
            const criteria = document.querySelectorAll('input[name="criteria"]:checked');
            const score = criteria.length;

            
            // Reset previous results
            resultDiv.style.display = 'block';
            resultDiv.classList.remove('result-unlikely', 'result-likely');
            
            // Determine the result based on the score
            if (score >= 3) {
                isLikely = true;
                resultDiv.innerHTML = `<strong>Resultado: Sinusite Bacteriana Provável (Pontuação: ${score})</strong><br>Considerar antibioterapia conforme as diretrizes do EPOS 2020. A seleção cuidadosa do paciente é essencial.`;
                resultDiv.classList.add('result-likely');
                antibioticContent.innerHTML =

                    'Guia Rápido de Antibioticoterapia para RSAB:<br>' +
                    '- Amoxicilina 500&nbsp;mg VO a cada 8&nbsp;h por 7&nbsp;a&nbsp;14&nbsp;dias.<br>' +
                    '- Casos moderados ou risco de resistência: Amoxicilina-Clavulanato 875/125&nbsp;mg a cada 12&nbsp;h por 7&nbsp;a&nbsp;14&nbsp;dias.<br>' +
                    '- Alergia a penicilina: Doxiciclina 100&nbsp;mg 12/12&nbsp;h ou Claritromicina 500&nbsp;mg 12/12&nbsp;h por 7&nbsp;a&nbsp;14&nbsp;dias.<br>' +

                    '- Reavaliar em 48&ndash;72&nbsp;h se ausência de melhora.';
            } else {
                isLikely = false;
                resultDiv.innerHTML = `<strong>Resultado: Sinusite Bacteriana Pouco Provável (Pontuação: ${score})</strong><br>O quadro é mais consistente com Rinossinusite Viral ou Pós-Viral. A antibioterapia não é recomendada. Sugere-se tratamento sintomático.`;
                resultDiv.classList.add('result-unlikely');
                antibioticContent.textContent = 'Sem indicação de antibiótico. Ofereça apenas tratamento sintomático e corticoide nasal.';
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
        const flagsOverlay = document.getElementById('red-flags-overlay');
        const closeFlagsBtn = document.getElementById('close-flags');

        function showFlags() {
            flagsPanel.classList.add('visible');
            flagsOverlay.classList.add('visible');
        }

        function hideFlags() {
            flagsPanel.classList.remove('visible');
            flagsOverlay.classList.remove('visible');
        }

        function toggleFlags() {
            if (flagsPanel.classList.contains('visible')) {
                hideFlags();
            } else {
                showFlags();
            }
        }

        flagIcon.addEventListener('click', toggleFlags);
        flagIcon.addEventListener('touchstart', toggleFlags);
        closeFlagsBtn.addEventListener('click', hideFlags);
        closeFlagsBtn.addEventListener('touchstart', hideFlags);
        flagsOverlay.addEventListener('click', hideFlags);

        document.addEventListener('click', function(event) {
            if (flagsPanel.classList.contains('visible') &&
                !flagsPanel.contains(event.target) &&
                !flagIcon.contains(event.target)) {
                hideFlags();
            }
        });

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

            prescriptionsSection.style.display = 'none';

        });

        printBtn.addEventListener('click', function() {
            window.print();
        });

        prescriptionsBtn.addEventListener('click', function() {
            prescriptionsSection.style.display = 'block';
            resultDiv.style.display = 'none';
            if (isLikely === null) {
                antibioticContent.textContent = 'Calcule a probabilidade antes de visualizar as recomendações.';
            }
            prescriptionsSection.scrollIntoView();
        });

        backBtn.addEventListener('click', function() {
            prescriptionsSection.style.display = 'none';
            if (resultDiv.innerHTML.trim() !== '') {
                resultDiv.style.display = 'block';
            }
        });
