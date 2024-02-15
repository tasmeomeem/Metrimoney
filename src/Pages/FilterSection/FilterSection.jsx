const FilterSection = () => {
  return (
    <div className="bg-red-100  py-20">
        <div className="text-4xl font-bold text-center pt-20">
            <p>Being Your Search for an Ideal Match</p>
        </div>

        <div className="flex gap-10 text-center justify-center pt-10">
            <details className="dropdown">
                <summary className="m-1 btn">I am looking for a</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li><a>Bride</a></li>
                    <li><a>Groom</a></li>
                </ul>
            </details>

            <details className="dropdown">
                <summary className="m-1 btn">Age</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li><a>18</a></li>
                    <li><a>19</a></li>
                    <li><a>20</a></li>
                    <li><a>21</a></li>
                    <li><a>22</a></li>
                    <li><a>23</a></li>
                    <li><a>24</a></li>
                    <li><a>25</a></li>
                    <li><a>26</a></li>
                    <li><a>27</a></li>
                    <li><a>28</a></li>
                    <li><a>29</a></li>
                    <li><a>30</a></li>
                    <li><a>31</a></li>
                    <li><a>32</a></li>
                    <li><a>33</a></li>
                    <li><a>34</a></li>
                    <li><a>35</a></li>
                </ul>
            </details>

            <details className="dropdown">
                <summary className="m-1 btn">Mother Tongue</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li><a>Bangla</a></li>
                    <li><a>English</a></li>
                    <li><a>Hindi</a></li>
                </ul>
            </details>

            <details className="dropdown">
                <summary className="m-1 btn">Caste</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li><a>Muslim</a></li>
                    <li><a>Hindu</a></li>
                    <li><a>Catholic</a></li>
                    <li><a>Buddhism</a></li>
                </ul>
            </details>

            <div>
                <input type="text" placeholder="Type here" className="input input-bordered input-error w-full max-w-xs" />
            </div>
        </div>
      

          
            
    </div>
  );
};

export default FilterSection;
