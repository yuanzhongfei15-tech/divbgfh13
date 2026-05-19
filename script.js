const workoutData = {
    homeWorkout: [
        { id: 1, title: '平板支撑挑战', icon: '🏋️', desc: '核心力量训练，提升稳定性', duration: '10分钟', difficulty: 'intermediate', difficultyText: '进阶', steps: ['肘部支撑，身体呈一条直线', '收紧核心，保持30-60秒', '重复4-6组'] },
        { id: 2, title: '深蹲训练', icon: '🦵', desc: '强化下肢力量，塑造臀腿线条', duration: '15分钟', difficulty: 'beginner', difficultyText: '入门', steps: ['双脚与肩同宽站立', '膝盖超过脚尖，下蹲至大腿平行地面', '起立并收紧臀部', '重复15-20次，3组'] },
        { id: 3, title: '俯卧撑训练', icon: '💪', desc: '经典上肢力量训练动作', duration: '12分钟', difficulty: 'intermediate', difficultyText: '进阶', steps: ['双手略宽于肩，身体呈一直线', '弯曲肘关节，身体下降', '推起回到起始位置', '重复10-15次，4组'] },
        { id: 4, title: '卷腹运动', icon: '🤸', desc: '腹肌核心训练，紧致腹部', duration: '8分钟', difficulty: 'beginner', difficultyText: '入门', steps: ['仰卧屈膝，双手抱头', '收缩腹肌，上半身抬起', '缓慢放下回到原位', '重复20-30次，4组'] },
        { id: 5, title: '开合跳', icon: '⏫', desc: '全身燃脂，提升心肺功能', duration: '7分钟', difficulty: 'beginner', difficultyText: '入门', steps: ['站立姿势，双脚并拢', '跳起双脚分开，双手上举', '回到原位，重复', '持续1分钟，共5组'] },
        { id: 6, title: '臀桥训练', icon: '🍑', desc: '激活臀部，改善下肢线条', duration: '10分钟', difficulty: 'beginner', difficultyText: '入门', steps: ['仰卧，屈膝90度', '抬起臀部，身体呈直线', '保持2秒，缓慢放下', '重复15-20次，4组'] }
    ],
    cardio: [
        { id: 7, title: 'HIIT燃脂训练', icon: '🔥', desc: '高强度间歇训练，快速燃脂', duration: '20分钟', difficulty: 'advanced', difficultyText: '高级', steps: ['热身3分钟', '30秒全力冲刺', '30秒休息', '重复10-12个循环', '放松拉伸2分钟'] },
        { id: 8, title: '跳绳燃脂', icon: '🪢', desc: '有效提高协调性和心肺功能', duration: '25分钟', difficulty: 'intermediate', difficultyText: '进阶', steps: ['热身5分钟', '每分钟120-140次', '每5分钟休息30秒', '共进行20分钟'] },
        { id: 9, title: '动感单车', icon: '🚴', desc: '低冲击有氧运动，保护关节', duration: '40分钟', difficulty: 'intermediate', difficultyText: '进阶', steps: ['调整座椅高度', '热身5分钟', '中等强度骑行25分钟', '冲刺5分钟', '放松5分钟'] },
        { id: 10, title: '有氧舞蹈', icon: '💃', desc: '有趣高效的全身有氧运动', duration: '30分钟', difficulty: 'beginner', difficultyText: '入门', steps: ['学习基础舞步', '跟随音乐律动', '全身协调运动', '享受舞蹈的快乐'] },
        { id: 11, title: '登山者', icon: '⛰️', desc: '高强度核心有氧训练', duration: '15分钟', difficulty: 'advanced', difficultyText: '高级', steps: ['平板支撑姿势', '交替提膝至胸部', '保持快节奏', '持续30秒/组，共10组'] },
        { id: 12, title: '波比跳', icon: '🤸‍♂️', desc: '全身燃脂之王', duration: '18分钟', difficulty: 'advanced', difficultyText: '高级', steps: ['站立开始', '下蹲，双手撑地', '后跳成平板', '前跳，站起', '重复10-15次/组，共6组'] }
    ],
    strength: [
        { id: 13, title: '哑铃卧推', icon: '🏋️‍♂️', desc: '强化胸肌和上肢力量', duration: '30分钟', difficulty: 'intermediate', difficultyText: '进阶', steps: ['仰卧在长凳上', '握哑铃向上推起', '控制下放至胸部位置', '重复8-12次，4组'] },
        { id: 14, title: '引体向上', icon: '💪', desc: '背部和手臂力量训练', duration: '25分钟', difficulty: 'advanced', difficultyText: '高级', steps: ['正握单杠', '身体拉起至下巴过杠', '控制下放', '重复5-10次，5组'] },
        { id: 15, title: '硬拉训练', icon: '🦾', desc: '全身力量训练，强化后链', duration: '35分钟', difficulty: 'advanced', difficultyText: '高级', steps: ['双脚与髋同宽', '握住杠铃', '拉起至站立姿势', '控制下放', '重复6-8次，5组'] },
        { id: 16, title: '杠铃深蹲', icon: '🦵', desc: '下肢力量训练王牌动作', duration: '30分钟', difficulty: 'intermediate', difficultyText: '进阶', steps: ['杠铃置于肩上', '下蹲至大腿平行地面', '站起', '重复8-10次，5组'] },
        { id: 17, title: '哑铃弯举', icon: '💪', desc: '二头肌专项训练', duration: '20分钟', difficulty: 'beginner', difficultyText: '入门', steps: ['双手握哑铃', '弯曲肘部举哑铃', '控制下放', '重复12-15次，4组'] },
        { id: 18, title: '三头肌下压', icon: '🖐️', desc: '三头肌力量训练', duration: '20分钟', difficulty: 'intermediate', difficultyText: '进阶', steps: ['握住绳索', '伸直手臂下压', '控制收回', '重复12-15次，4组'] }
    ],
    yoga: [
        { id: 19, title: '冥想与呼吸', icon: '🧘', desc: '放松身心，减轻压力', duration: '20分钟', difficulty: 'beginner', difficultyText: '入门', steps: ['舒适坐姿', '闭眼专注呼吸', '吸气4秒，屏息4秒', '呼气8秒，重复'] },
        { id: 20, title: '下犬式', icon: '🐕', desc: '经典瑜伽体式，拉伸全身', duration: '15分钟', difficulty: 'beginner', difficultyText: '入门', steps: ['双手双脚撑地', '臀部向上抬起', '呈倒V字形', '保持5-8个呼吸'] },
        { id: 21, title: '战士一式', icon: '⚔️', desc: '增强腿部力量和专注力', duration: '12分钟', difficulty: 'intermediate', difficultyText: '进阶', steps: ['站立姿势', '一腿前跨屈膝90度', '双臂上举', '保持5个呼吸，换边'] },
        { id: 22, title: '树式平衡', icon: '🌳', desc: '提升平衡感和专注力', duration: '10分钟', difficulty: 'beginner', difficultyText: '入门', steps: ['单腿站立', '另一脚放于大腿内侧', '双手合十于胸前', '保持30-60秒，换边'] },
        { id: 23, title: '眼镜蛇式', icon: '🐍', desc: '打开胸腔，强化背部', duration: '15分钟', difficulty: 'beginner', difficultyText: '入门', steps: ['俯卧，双手放于肩旁', '上半身向上抬起', '保持5个呼吸', '重复2-3次'] },
        { id: 24, title: '婴儿式放松', icon: '👶', desc: '全面放松身体', duration: '8分钟', difficulty: 'beginner', difficultyText: '入门', steps: ['双膝跪地', '臀部坐于脚跟', '上半身前俯', '手臂向前伸展'] }
    ],
    slim: [
        { id: 25, title: '侧腰训练', icon: '⚡', desc: '雕刻腰线，减少侧腰赘肉', duration: '15分钟', difficulty: 'beginner', difficultyText: '入门', steps: ['站立姿势', '一手叉腰，一手向上', '向一侧弯曲', '保持2秒，换边，各15次'] },
        { id: 26, title: '大腿内侧训练', icon: '🦵', desc: '紧致大腿内侧线条', duration: '12分钟', difficulty: 'beginner', difficultyText: '入门', steps: ['侧卧位', '上方腿弯曲踩地', '下方腿向上抬起', '重复20次，换边'] },
        { id: 27, title: '手臂拜拜肉', icon: '💪', desc: '紧致手臂后侧', duration: '10分钟', difficulty: 'beginner', difficultyText: '入门', steps: ['站立，双手握拳', '手臂向后伸直', '小幅度上下摆动', '持续1分钟/组，5组'] },
        { id: 28, title: '马甲线训练', icon: '🎯', desc: '打造完美腹部线条', duration: '20分钟', difficulty: 'intermediate', difficultyText: '进阶', steps: ['卷腹20次', '侧卷腹各15次', '抬腿卷腹15次', '平板支撑45秒', '重复4组'] },
        { id: 29, title: '提臀训练', icon: '🍑', desc: '提升臀部线条', duration: '18分钟', difficulty: 'beginner', difficultyText: '入门', steps: ['跪姿后踢腿各15次', '蚌式开合各20次', '臀桥20次', '深蹲跳15次', '重复3组'] },
        { id: 30, title: '小腿塑形', icon: '🦶', desc: '美化小腿线条', duration: '12分钟', difficulty: 'beginner', difficultyText: '入门', steps: ['站立提踵20次', '坐姿提踵20次', '拉伸放松', '重复4组'] }
    ]
};

const plans = [
    { id: 1, title: '新手入门计划', badge: '推荐', duration: '4周', items: ['每周训练3次', '每次30-40分钟', '居家健身为主', '逐步增加强度', '注重动作规范'] },
    { id: 2, title: '燃脂瘦身计划', badge: '热门', duration: '6周', items: ['HIIT训练3次/周', '有氧运动4次/周', '控制饮食配合', '每周减重0.5-1kg', '坚持就是胜利'] },
    { id: 3, title: '增肌塑形计划', badge: '高级', duration: '8周', items: ['力量训练4次/周', '分化训练模式', '高蛋白饮食', '渐进式超负荷', '充足休息恢复'] },
    { id: 4, title: '瑜伽放松计划', badge: '舒缓', duration: '4周', items: ['每周练习5次', '每次30-60分钟', '结合冥想练习', '改善睡眠质量', '提升生活品质'] }
];

const rankings = [
    { id: 1, title: 'HIIT燃脂训练', icon: '🔥', views: '156.8K', category: '有氧减脂' },
    { id: 2, title: '平板支撑挑战', icon: '🏋️', views: '132.5K', category: '居家健身' },
    { id: 3, title: '深蹲训练', icon: '🦵', views: '118.2K', category: '居家健身' },
    { id: 4, title: '马甲线训练', icon: '🎯', views: '105.3K', category: '瘦身动作' },
    { id: 5, title: '冥想与呼吸', icon: '🧘', views: '92.7K', category: '瑜伽拉伸' },
    { id: 6, title: '哑铃卧推', icon: '🏋️‍♂️', views: '85.4K', category: '力量塑形' }
];

let currentTheme = localStorage.getItem('theme') || 'light';
let activeFilter = 'all';
let searchQuery = '';

document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    renderWorkouts();
    renderPlans();
    renderRankings();
    initEventListeners();
});

function initTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
}

function initEventListeners() {
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', toggleTheme);

    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', handleSearch);

    const filterTags = document.querySelectorAll('.filter-tag');
    filterTags.forEach(tag => {
        tag.addEventListener('click', handleFilter);
    });

    const modalClose = document.getElementById('modalClose');
    modalClose.addEventListener('click', closeModal);

    const modal = document.getElementById('workoutModal');
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
            
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
}

function handleSearch(e) {
    searchQuery = e.target.value.toLowerCase();
    renderWorkouts();
}

function handleFilter(e) {
    activeFilter = e.target.dataset.filter;
    
    document.querySelectorAll('.filter-tag').forEach(tag => {
        tag.classList.remove('active');
    });
    e.target.classList.add('active');
    
    renderWorkouts();
}

function renderWorkouts() {
    renderCategory('homeWorkout', 'homeWorkoutGrid');
    renderCategory('cardio', 'cardioGrid');
    renderCategory('strength', 'strengthGrid');
    renderCategory('yoga', 'yogaGrid');
    renderCategory('slim', 'slimGrid');
}

function renderCategory(categoryKey, gridId) {
    const grid = document.getElementById(gridId);
    const workouts = workoutData[categoryKey].filter(workout => {
        const matchesSearch = workout.title.toLowerCase().includes(searchQuery) || 
                             workout.desc.toLowerCase().includes(searchQuery);
        const matchesFilter = checkFilter(workout, activeFilter);
        return matchesSearch && matchesFilter;
    });
    
    grid.innerHTML = workouts.map(workout => createWorkoutCard(workout)).join('');
    
    grid.querySelectorAll('.workout-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = parseInt(card.dataset.id);
            openWorkoutModal(id);
        });
    });
}

function checkFilter(workout, filter) {
    if (filter === 'all') return true;
    
    const durationMap = {
        'short': 15,
        'medium': 30,
        'long': Infinity
    };
    
    if (filter === 'beginner' || filter === 'intermediate' || filter === 'advanced') {
        return workout.difficulty === filter;
    }
    
    if (filter === 'short') {
        return parseInt(workout.duration) <= 15;
    } else if (filter === 'medium') {
        const dur = parseInt(workout.duration);
        return dur > 15 && dur <= 30;
    } else if (filter === 'long') {
        return parseInt(workout.duration) > 30;
    }
    
    return true;
}

function createWorkoutCard(workout) {
    return `
        <div class="workout-card" data-id="${workout.id}">
            <div class="workout-card-image">${workout.icon}</div>
            <div class="workout-card-content">
                <h3 class="workout-card-title">${workout.title}</h3>
                <p class="workout-card-desc">${workout.desc}</p>
                <div class="workout-card-meta">
                    <span class="meta-tag">⏱️ ${workout.duration}</span>
                    <span class="meta-tag difficulty-${workout.difficulty}">📊 ${workout.difficultyText}</span>
                </div>
            </div>
        </div>
    `;
}

function renderPlans() {
    const grid = document.getElementById('plansGrid');
    grid.innerHTML = plans.map(plan => `
        <div class="plan-card">
            <div class="plan-card-header">
                <h3 class="plan-card-title">${plan.title}</h3>
                <span class="plan-card-badge">${plan.badge}</span>
            </div>
            <ul class="plan-card-items">
                ${plan.items.map(item => `<li>${item}</li>`).join('')}
            </ul>
            <div class="plan-card-footer">
                <span class="meta-tag">📅 ${plan.duration}</span>
            </div>
        </div>
    `).join('');
}

function renderRankings() {
    const container = document.getElementById('rankingContainer');
    container.innerHTML = rankings.map((item, index) => `
        <div class="ranking-item">
            <div class="ranking-number">${index + 1}</div>
            <div class="ranking-icon">${item.icon}</div>
            <div class="ranking-content">
                <div class="ranking-title">${item.title}</div>
                <div class="ranking-stats">👁️ ${item.views} · ${item.category}</div>
            </div>
        </div>
    `).join('');
}

function findWorkoutById(id) {
    for (const category in workoutData) {
        const found = workoutData[category].find(w => w.id === id);
        if (found) return found;
    }
    return null;
}

function openWorkoutModal(id) {
    const workout = findWorkoutById(id);
    if (!workout) return;
    
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div class="modal-image">${workout.icon}</div>
        <h2 class="modal-title">${workout.title}</h2>
        <div class="modal-meta">
            <span class="meta-tag">⏱️ ${workout.duration}</span>
            <span class="meta-tag difficulty-${workout.difficulty}">📊 ${workout.difficultyText}</span>
        </div>
        <p class="modal-description">${workout.desc}</p>
        <div class="modal-steps">
            <h3>动作步骤</h3>
            ${workout.steps.map((step, index) => `
                <div class="step-item">
                    <span class="step-number">${index + 1}</span>
                    ${step}
                </div>
            `).join('')}
        </div>
    `;
    
    const modal = document.getElementById('workoutModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('workoutModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}